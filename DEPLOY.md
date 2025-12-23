# GitHub Pages Deployment Guide

## Quick Deploy Steps

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `Ainhorus` (or your preferred name)
3. **Don't** initialize with README, .gitignore, or license
4. Copy the repository URL

### 3. Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/Ainhorus.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 4. Update Base Path (if repository name is different)

If your repository name is NOT "Ainhorus", update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',
})
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your project
- Deploy the `dist` folder to the `gh-pages` branch
- Make your site live on GitHub Pages

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### 7. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/Ainhorus/
```

**Note:** It may take a few minutes for the site to be available after deployment.

## Updating Your Site

After making changes:

```bash
# Make your changes, then:
git add .
git commit -m "Update website"
git push
npm run deploy
```

## Troubleshooting

### Site shows 404
- Wait 5-10 minutes after first deployment
- Check that the base path in `vite.config.ts` matches your repository name
- Verify GitHub Pages is enabled in repository settings

### Assets not loading
- Ensure the base path in `vite.config.ts` is correct
- Clear browser cache
- Check browser console for errors

### Build errors
- Run `npm run build` locally to check for errors
- Ensure all dependencies are installed: `npm install`

