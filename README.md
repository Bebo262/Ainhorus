# Ain Horus - Smart Public Transport Safety & Incident Detection System

A modern, responsive landing website for the Ain Horus graduation project - a comprehensive smart public transport safety and incident detection system for Egypt.

## 🚀 Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icon library
- **Inter Font** - Clean, professional typography

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Ainhorus
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running Locally

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Building for Production

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

Preview the production build:
```bash
npm run preview
```

## 📦 Deploying to GitHub Pages

### Step 1: Update Vite Config

The `vite.config.ts` file is already configured with the base path `/Ainhorus/`. If your repository name is different, update it:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/Your-Repo-Name/',
})
```

### Step 2: Install GitHub Pages Deploy Plugin (Optional but Recommended)

Install `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

Add deploy scripts to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Step 3: Deploy

**Option A: Using gh-pages (Recommended)**
```bash
npm run deploy
```

**Option B: Manual Deployment**
1. Build the project: `npm run build`
2. Go to your repository on GitHub
3. Navigate to Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Choose the `gh-pages` branch (or `main` branch with `/dist` folder)
6. Select the folder containing your built files
7. Click Save

### Step 4: Access Your Site

Your site will be available at:
```
https://<your-username>.github.io/Ainhorus/
```

## 📁 Project Structure

```
Ainhorus/
├── public/
│   └── diagrams/          # Placeholder diagram images
├── src/
│   ├── components/        # React components
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── KeyFeatures.tsx
│   │   ├── DiagramsGallery.tsx
│   │   ├── SDGs.tsx
│   │   ├── CompetitorSnapshot.tsx
│   │   ├── Team.tsx
│   │   ├── Footer.tsx
│   │   └── *.css
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Design Features

- **Color Palette**: White background, blue accents (#2563eb), black text
- **Typography**: Inter font family with clear hierarchy
- **Animations**: Smooth Framer Motion animations on scroll
- **Responsive**: Mobile-first design, works on all screen sizes
- **Modern UI**: Glass effects, soft shadows, rounded corners

## 📝 Adding Diagrams

To add your diagram images:

1. Place your diagram images in the `public/diagrams/` folder
2. Name them according to the expected filenames:
   - `dfd0.png`
   - `dfd1.png`
   - `dfd2_capture.png`
   - `dfd2_validate.png`
   - `dfd2_store.png`
   - `dfd2_alerts.png`
   - `erd.png`
   - `class.png`
   - `usecase.png`
   - `sequence.png`
   - `activity.png`

3. The gallery will automatically display them when they exist

## 🔧 Customization

- **Colors**: Edit CSS variables in `src/index.css`
- **Content**: Update component files in `src/components/`
- **Styling**: Modify component CSS files or `src/App.css`

## 📄 License

This project is part of a graduation project for academic purposes.

## 👥 Credits

- **Supervisor**: Dr. Ahmed Elseddawy – Head of BIS Department (Smart Village)
- **Teaching Assistant**: Dr. Ahmed Abdelsadek

---

Built with ❤️ for Ain Horus Project

