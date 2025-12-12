# Deel-like W2W - Next.js Navbar

A modern Next.js application with an animated navbar component built using Motion (Framer Motion), Tailwind CSS, and TypeScript.

## Features

- ✨ Smooth animated navbar with hover effects
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Built with Next.js 16 and React 19
- 📱 Responsive design
- 🌙 Dark mode support

## Getting Started

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles with Tailwind directives
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page with navbar example
├── components/
│   └── navbar.tsx       # Navbar components (Menu, MenuItem, ProductItem, HoveredLink)
└── lib/
    └── utils.ts         # Utility functions (cn for className merging)
```

## Components

### Menu
The main navigation container that manages the active state.

### MenuItem
Individual menu items that show dropdown content on hover.

### ProductItem
A component for displaying product cards in dropdown menus.

### HoveredLink
A styled link component for dropdown menu items.

## Usage Example

```tsx
import { Menu, MenuItem, HoveredLink } from "@/components/navbar";

export default function MyPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Products">
        <div className="flex flex-col space-y-4">
          <HoveredLink href="/products">View Products</HoveredLink>
        </div>
      </MenuItem>
    </Menu>
  );
}
```

## Technologies

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Motion (Framer Motion)** - Animations
- **clsx & tailwind-merge** - Class name utilities

# deel_w2wadvisors
