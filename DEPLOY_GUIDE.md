# 🚀 Hướng dẫn Deploy Portfolio Website

## 📋 Tổng quan
Website portfolio của bạn đã sẵn sàng để deploy lên hosting. Dưới đây là các cách phổ biến nhất để đưa website lên internet.

## 🎯 Các tùy chọn Deploy

### 1. **Vercel (Khuyến nghị - Miễn phí)**
```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
vercel

# Hoặc deploy trực tiếp từ GitHub
# 1. Push code lên GitHub
# 2. Kết nối với Vercel tại vercel.com
# 3. Import project từ GitHub
```

**Ưu điểm:**
- ✅ Miễn phí
- ✅ Tự động deploy khi push code
- ✅ CDN toàn cầu
- ✅ SSL tự động
- ✅ Tối ưu cho React

### 2. **Netlify (Miễn phí)**
```bash
# Build project
npm run build

# Upload thư mục 'dist' lên netlify.com
# Hoặc kết nối với GitHub để auto-deploy
```

**Ưu điểm:**
- ✅ Miễn phí
- ✅ Drag & drop deploy
- ✅ Form handling
- ✅ Serverless functions

### 3. **GitHub Pages (Miễn phí)**
```bash
# Cài đặt gh-pages
npm install --save-dev gh-pages

# Thêm script vào package.json
"homepage": "https://yourusername.github.io/my-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

### 4. **Firebase Hosting (Miễn phí)**
```bash
# Cài đặt Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Init project
firebase init hosting

# Deploy
firebase deploy
```

## 🛠️ Chuẩn bị trước khi Deploy

### 1. **Build Production**
```bash
# Build project
npm run build

# Kiểm tra thư mục 'dist' đã được tạo
```

### 2. **Tối ưu hóa**
- ✅ Kiểm tra tất cả link hoạt động
- ✅ Test responsive trên mobile
- ✅ Tối ưu hình ảnh
- ✅ Kiểm tra SEO meta tags

### 3. **Cập nhật thông tin**
- ✅ Thay đổi link demo/github thực tế
- ✅ Cập nhật thông tin liên hệ
- ✅ Thêm hình ảnh dự án thực tế

## 🌐 Các bước Deploy với Vercel (Khuyến nghị)

### Bước 1: Chuẩn bị
```bash
# Đảm bảo project chạy được
npm run dev

# Build thành công
npm run build
```

### Bước 2: Push lên GitHub
```bash
# Khởi tạo git (nếu chưa có)
git init
git add .
git commit -m "Initial commit"

# Tạo repository trên GitHub
# Push code
git remote add origin https://github.com/yourusername/my-portfolio.git
git push -u origin main
```

### Bước 3: Deploy với Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng ký/đăng nhập với GitHub
3. Click "New Project"
4. Import project từ GitHub
5. Cấu hình:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Bước 4: Cấu hình Domain (Tùy chọn)
- Vercel sẽ cung cấp domain miễn phí: `your-project.vercel.app`
- Có thể thêm custom domain trong Settings

## 📱 Kiểm tra sau khi Deploy

### ✅ Checklist
- [ ] Website load nhanh
- [ ] Tất cả trang hoạt động
- [ ] Responsive trên mobile
- [ ] Form liên hệ hoạt động
- [ ] Link social media đúng
- [ ] SEO meta tags

### 🔧 Troubleshooting
```bash
# Nếu build lỗi
npm run build

# Kiểm tra lỗi trong console
# Sửa lỗi và build lại
```

## 🎨 Tùy chỉnh thêm

### 1. **Thêm Google Analytics**
```html
<!-- Thêm vào index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. **Thêm Favicon**
- Thay thế `public/vite.svg` bằng favicon của bạn
- Tạo favicon.ico và đặt vào `public/`

### 3. **SEO Optimization**
```html
<!-- Thêm vào index.html -->
<meta name="description" content="Portfolio của Hồ Châu Thành - Lập trình viên Full Stack">
<meta name="keywords" content="portfolio, developer, react, unity, full stack">
<meta property="og:title" content="Hồ Châu Thành - Portfolio">
<meta property="og:description" content="Lập trình viên Full Stack chuyên nghiệp">
```

## 🚀 Kết quả

Sau khi deploy thành công, bạn sẽ có:
- ✅ Website portfolio chuyên nghiệp
- ✅ Domain riêng (miễn phí)
- ✅ SSL certificate
- ✅ CDN toàn cầu
- ✅ Auto-deploy khi update code

## 📞 Hỗ trợ

Nếu gặp vấn đề trong quá trình deploy:
1. Kiểm tra console log
2. Đảm bảo build thành công
3. Kiểm tra file cấu hình
4. Liên hệ để được hỗ trợ

**Chúc bạn deploy thành công! 🎉**
