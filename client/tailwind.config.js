/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         colors: {
          // Chủ đạo: Xanh - Đỏ - Trắng (UMT)
          'ocean-deep': '#0B2E66',      // Xanh đậm nền tối (đi kèm trắng)
          'ocean-dark': '#103A80',      // Xanh đậm
          'ocean-primary': '#0057B7',   // Xanh chính (UMT Blue)
          'ocean-medium': '#2C7BE5',    // Xanh trung bình (hover)
          'ocean-light': '#60A5FA',     // Xanh nhạt
          'ocean-pale': '#E3F2FD',      // Xanh rất nhạt nền
           
           // Màu phụ
          'coral': '#DA291C',           // Đỏ chủ đạo (UMT Red)
          'coral-light': '#F06A61',     // Đỏ nhạt/hover
           'gold': '#F59E0B',            // Vàng
           'gold-light': '#FCD34D',      // Vàng nhạt
           'silver': '#6B7280',          // Bạc
           'silver-light': '#D1D5DB',    // Bạc nhạt
           
           // Màu nền
          'bg-primary': '#FFFFFF',      // Nền chính trắng
          'bg-secondary': '#F7FAFF',    // Nền phụ xanh rất nhạt
          'bg-dark': '#0B1426',         // Nền tối
           
           // Màu text
           'text-primary': '#1E293B',    // Text chính
           'text-secondary': '#64748B',  // Text phụ
           'text-light': '#94A3B8',      // Text nhạt
           
           // Giữ lại một số màu cũ để tương thích
          'umt-blue': '#0057B7',
          'umt-red': '#DA291C',
          'umt-white': '#FFFFFF',
           'umt-gray': '#F8FAFC',
           'umt-dark': '#0B1426',
          'umt-light-blue': '#E3F2FD',
          'umt-light-red': '#FDE2E0',
           'umt-accent': '#F59E0B',
         },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
        'xl-soft': '0 20px 60px -15px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-delay-200': 'fadeInDelay 0.8s ease-out 0.2s both',
        'fade-in-delay-400': 'fadeInDelay 0.8s ease-out 0.4s both',
        'fade-in-delay-600': 'fadeInDelay 0.8s ease-out 0.6s both',
        'slide-in-left': 'slideInFromLeft 0.8s ease-out',
        'slide-in-right': 'slideInFromRight 0.8s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.5s ease-out',
        'slide-in-down': 'slideInDown 0.5s ease-out',
        'slide-in-left-new': 'slideInLeft 0.5s ease-out',
        'slide-in-right-new': 'slideInRight 0.5s ease-out',
        'fade-in-scale': 'fadeInScale 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDelay: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInFromLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInFromRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 45, 114, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 45, 114, 0.6), 0 0 30px rgba(0, 45, 114, 0.4)' },
        },
        slideInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInScale: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
