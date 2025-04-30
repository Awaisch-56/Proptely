# Proptely

**Proptely** is a modern **property management and leasing dashboard** built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It provides tools to manage properties, track leasing stages, assign team members, and visualize key metrics through a clean, responsive UI.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Icons & Assets:** SVG-based custom icons

---

## 📁 Project Structure

```bash
proptely/
├── app/
│   ├── components/        # Reusable UI components (Button, Table, Pagination, etc.)
│   ├── assets/            # Icons and images
│   ├── porfolio/          # Portfolio pages (like properties, units)
│   ├── contact/          # contact pages (like tenant )
│   ├── leasing/          # leasing pages (like all-Lease, drafts)         
│   ├── stores/            # Zustand state stores
│   ├── utils/          # Axios API calls and config
│   └── layout.tsx         # Global layout
├── public/                # Static assets
├── styles/                # Global styles and Tailwind config
├── .next/                 # Build output (auto-generated)
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
