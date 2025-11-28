"use client"

import { useEffect } from 'react'

// CSS crítico para above-the-fold content - máximo coverage
const criticalCSS = `
  /* Critical CSS for above-the-fold content - maximum coverage */

  /* CSS Reset/Base */
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-feature-settings: normal;
    font-variation-settings: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 1.5;
    color: #111827;
    background-color: #f5f7fa;
  }

  /* Container and layout */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 640px) {
    .container {
      padding: 0 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding: 0 2rem;
    }
  }

  @media (min-width: 1280px) {
    .container {
      padding: 0 3rem;
    }
  }

  /* Grid utilities */
  .grid {
    display: grid;
  }

  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .gap-12 {
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    .lg\\:gap-20 {
      gap: 5rem;
    }
  }

  .items-center {
    align-items: center;
  }

  /* Hero section */
  .relative {
    position: relative;
  }

  .min-h-\\[100vh\\] {
    min-height: 100vh;
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .bg-primary {
    background-color: #1e3a5f;
  }

  .text-primary-foreground {
    color: #ffffff;
  }

  .pt-24 {
    padding-top: 6rem;
  }

  .pb-12 {
    padding-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    .lg\\:pt-24 {
      padding-top: 6rem;
    }
    .lg\\:pb-14 {
      padding-bottom: 3.5rem;
    }
  }

  .overflow-hidden {
    overflow: hidden;
  }

  /* Decorative elements */
  .absolute {
    position: absolute;
  }

  .top-\\[\\-10\\%\\] {
    top: -10%;
  }

  .left-\\[\\-10\\%\\] {
    left: -10%;
  }

  .bottom-\\[\\-10\\%\\] {
    bottom: -10%;
  }

  .right-\\[\\-10\\%\\] {
    right: -10%;
  }

  .w-\\[500px\\] {
    width: 500px;
  }

  .h-\\[500px\\] {
    height: 500px;
  }

  .w-\\[600px\\] {
    width: 600px;
  }

  .h-\\[600px\\] {
    height: 600px;
  }

  .bg-secondary\\/20 {
    background-color: rgba(221, 176, 66, 0.2);
  }

  .bg-secondary\\/10 {
    background-color: rgba(221, 176, 66, 0.1);
  }

  .rounded-full {
    border-radius: 9999px;
  }

  .blur-\\[120px\\] {
    filter: blur(120px);
  }

  .opacity-60 {
    opacity: 0.6;
  }

  .pointer-events-none {
    pointer-events: none;
  }

  .z-10 {
    z-index: 10;
  }

  /* Typography */
  .font-serif {
    font-family: "Playfair Display", serif;
  }

  .font-bold {
    font-weight: 700;
  }

  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  @media (min-width: 640px) {
    .sm\\:text-5xl {
      font-size: 3rem;
      line-height: 1;
    }
  }

  @media (min-width: 768px) {
    .md\\:text-6xl {
      font-size: 3.75rem;
      line-height: 1;
    }
  }

  @media (min-width: 1024px) {
    .lg\\:text-7xl {
      font-size: 4.5rem;
      line-height: 1;
    }
  }

  .leading-\\[1\\.1\\] {
    line-height: 1.1;
  }

  .text-balance {
    text-wrap: balance;
  }

  .mb-8 {
    margin-bottom: 2rem;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    .md\\:text-xl {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }

  .leading-relaxed {
    line-height: 1.625;
  }

  .max-w-lg {
    max-width: 32rem;
  }

  .font-light {
    font-weight: 300;
  }

  .mb-10 {
    margin-bottom: 2.5rem;
  }

  /* Buttons */
  .flex-col {
    flex-direction: column;
  }

  @media (min-width: 640px) {
    .sm\\:flex-row {
      flex-direction: row;
    }
  }

  .gap-5 {
    gap: 1.25rem;
  }

  .mb-16 {
    margin-bottom: 4rem;
  }

  .h-14 {
    height: 3.5rem;
  }

  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .bg-secondary {
    background-color: #ddb042;
  }

  .text-slate-950 {
    color: #020617;
  }

  .hover\\:bg-secondary\\/90:hover {
    background-color: rgba(221, 176, 66, 0.9);
  }

  .font-semibold {
    font-weight: 600;
  }

  .rounded-full {
    border-radius: 9999px;
  }

  .shadow-\\[0_0_20px_rgba\\(221\\,176\\,66\\,0\\.15\\)\\] {
    box-shadow: 0 0 20px rgba(221, 176, 66, 0.15);
  }

  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .hover\\:scale-105:hover {
    transform: scale(1.05);
  }

  /* Scroll indicator */
  .bottom-8 {
    bottom: 2rem;
  }

  .left-1\\/2 {
    left: 50%;
  }

  .-translate-x-1\\/2 {
    transform: translateX(-50%);
  }

  .animate-bounce {
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  .text-primary-foreground\\/70 {
    color: rgba(255, 255, 255, 0.7);
  }

  .hover\\:text-primary-foreground:hover {
    color: #ffffff;
  }

  .transition-colors {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .group:hover .group-hover\\:translate-x-1 {
    transform: translateX(0.25rem);
  }

  /* Loading and image states */
  .image-loading {
    background: #e5e7eb;
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Button styles - critical */
  .inline-flex {
    display: inline-flex;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .gap-3 {
    gap: 0.75rem;
  }

  .gap-4 {
    gap: 1rem;
  }

  .gap-5 {
    gap: 1.25rem;
  }

  .gap-6 {
    gap: 1.5rem;
  }

  .rounded {
    border-radius: 0.25rem;
  }

  .rounded-full {
    border-radius: 9999px;
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .rounded-xl {
    border-radius: 0.75rem;
  }

  .rounded-2xl {
    border-radius: 1rem;
  }

  .border {
    border-width: 1px;
    border-style: solid;
    border-color: #e5e7eb;
  }

  .bg-primary {
    background-color: #1e3a5f;
  }

  .bg-secondary {
    background-color: #ddb042;
  }

  .bg-card {
    background-color: #ffffff;
  }

  .bg-muted {
    background-color: #f3f4f6;
  }

  .text-primary {
    color: #1e3a5f;
  }

  .text-primary-foreground {
    color: #ffffff;
  }

  .text-secondary {
    color: #ddb042;
  }

  .text-muted-foreground {
    color: #6b7280;
  }

  .text-foreground {
    color: #111827;
  }

  /* Typography - critical */
  .font-sans {
    font-family: Inter, system-ui, sans-serif;
  }

  .font-serif {
    font-family: 'Playfair Display', serif;
  }

  .font-light {
    font-weight: 300;
  }

  .font-normal {
    font-weight: 400;
  }

  .font-medium {
    font-weight: 500;
  }

  .font-semibold {
    font-weight: 600;
  }

  .font-bold {
    font-weight: 700;
  }

  .text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .leading-none {
    line-height: 1;
  }

  .leading-tight {
    line-height: 1.25;
  }

  .leading-snug {
    line-height: 1.375;
  }

  .leading-normal {
    line-height: 1.5;
  }

  .leading-relaxed {
    line-height: 1.625;
  }

  /* Spacing - critical */
  .m-0 {
    margin: 0;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .my-6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .mb-2 {
    margin-bottom: 0.5rem;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .mb-6 {
    margin-bottom: 1.5rem;
  }

  .mb-8 {
    margin-bottom: 2rem;
  }

  .mt-4 {
    margin-top: 1rem;
  }

  .mt-6 {
    margin-top: 1.5rem;
  }

  .mt-8 {
    margin-top: 2rem;
  }

  .p-4 {
    padding: 1rem;
  }

  .p-6 {
    padding: 1.5rem;
  }

  .p-8 {
    padding: 2rem;
  }

  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .py-20 {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .pt-4 {
    padding-top: 1rem;
  }

  .pt-8 {
    padding-top: 2rem;
  }

  .pt-12 {
    padding-top: 3rem;
  }

  .pt-16 {
    padding-top: 4rem;
  }

  .pt-24 {
    padding-top: 6rem;
  }

  .pb-4 {
    padding-bottom: 1rem;
  }

  .pb-8 {
    padding-bottom: 2rem;
  }

  .pb-12 {
    padding-bottom: 3rem;
  }

  .pb-16 {
    padding-bottom: 4rem;
  }

  /* Layout - critical */
  .block {
    display: block;
  }

  .inline-block {
    display: inline-block;
  }

  .flex {
    display: flex;
  }

  .inline-flex {
    display: inline-flex;
  }

  .grid {
    display: grid;
  }

  .hidden {
    display: none;
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .fixed {
    position: fixed;
  }

  .w-full {
    width: 100%;
  }

  .h-full {
    height: 100%;
  }

  .max-w-xs {
    max-width: 20rem;
  }

  .max-w-sm {
    max-width: 24rem;
  }

  .max-w-md {
    max-width: 28rem;
  }

  .max-w-lg {
    max-width: 32rem;
  }

  .max-w-xl {
    max-width: 36rem;
  }

  .max-w-2xl {
    max-width: 42rem;
  }

  .max-w-3xl {
    max-width: 48rem;
  }

  .max-w-4xl {
    max-width: 56rem;
  }

  .max-w-5xl {
    max-width: 64rem;
  }

  .max-w-6xl {
    max-width: 72rem;
  }

  .max-w-7xl {
    max-width: 80rem;
  }

  /* Flexbox/Grid - critical */
  .flex-col {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .items-start {
    align-items: flex-start;
  }

  .items-center {
    align-items: center;
  }

  .items-end {
    align-items: flex-end;
  }

  .justify-start {
    justify-content: flex-start;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  /* Responsive prefixes - critical */
  @media (min-width: 640px) {
    .sm\\:flex {
      display: flex;
    }
    .sm\\:hidden {
      display: none;
    }
    .sm\\:block {
      display: block;
    }
    .sm\\:text-2xl {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .sm\\:text-3xl {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  }

  @media (min-width: 768px) {
    .md\\:block {
      display: block;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:grid {
      display: grid;
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:text-4xl {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
    .md\\:text-5xl {
      font-size: 3rem;
      line-height: 1;
    }
  }

  @media (min-width: 1024px) {
    .lg\\:block {
      display: block;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:grid {
      display: grid;
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:text-6xl {
      font-size: 3.75rem;
      line-height: 1;
    }
    .lg\\:text-7xl {
      font-size: 4.5rem;
      line-height: 1;
    }
  }

  @media (min-width: 1280px) {
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  /* Effects - critical */
  .shadow {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  .shadow-md {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  .shadow-xl {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  .shadow-2xl {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }

  .opacity-0 {
    opacity: 0;
  }

  .opacity-100 {
    opacity: 1;
  }

  .transition {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .transition-colors {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .duration-200 {
    transition-duration: 200ms;
  }

  .duration-300 {
    transition-duration: 300ms;
  }

  .duration-500 {
    transition-duration: 500ms;
  }

  .ease-in-out {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ease-out {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  /* Animations - critical */
  .animate-in {
    animation-fill-mode: both;
  }

  .fade-in {
    animation-name: fade-in;
  }

  .slide-in-from-bottom-8 {
    animation-name: slide-in-from-bottom-8;
  }

  .slide-in-from-right-12 {
    animation-name: slide-in-from-right-12;
  }

  .zoom-in {
    animation-name: zoom-in;
  }

  .duration-500 {
    animation-duration: 500ms;
  }

  .duration-700 {
    animation-duration: 700ms;
  }

  .duration-1000 {
    animation-duration: 1000ms;
  }

  .delay-200 {
    animation-delay: 200ms;
  }

  .delay-500 {
    animation-delay: 500ms;
  }

  .animate-bounce {
    animation: bounce 1s infinite;
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slide-in-from-bottom-8 {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-in-from-right-12 {
    from {
      opacity: 0;
      transform: translateX(3rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes zoom-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }

  /* Hover states - critical */
  .hover\\:scale-105:hover {
    transform: scale(1.05);
  }

  .hover\\:bg-primary\\/90:hover {
    background-color: rgba(30, 58, 95, 0.9);
  }

  .hover\\:bg-secondary\\/90:hover {
    background-color: rgba(221, 176, 66, 0.9);
  }

  .hover\\:text-primary:hover {
    color: #1e3a5f;
  }

  /* Focus states - critical */
  .focus\\:outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .focus\\:ring-2:focus {
    box-shadow: 0 0 0 2px #1e3a5f;
  }

  /* Component specific styles - critical */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .btn-primary {
    background-color: #1e3a5f;
    color: #ffffff;
  }

  .btn-primary:hover {
    background-color: rgba(30, 58, 95, 0.9);
  }

  .btn-secondary {
    background-color: #ddb042;
    color: #1e3a5f;
  }

  .btn-secondary:hover {
    background-color: rgba(221, 176, 66, 0.9);
  }

  /* Loading states */
  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`

export function CriticalCSS() {
  useEffect(() => {
    // Inyección inmediata del CSS crítico - más agresiva
    const injectCriticalCSS = () => {
      const style = document.createElement('style')
      style.textContent = criticalCSS
      style.setAttribute('data-critical', 'true')

      // Insertar lo más temprano posible en <head>
      const head = document.head || document.getElementsByTagName('head')[0]
      const firstChild = head.firstChild

      if (firstChild) {
        head.insertBefore(style, firstChild)
      } else {
        head.appendChild(style)
      }

      // Convertir chunks CSS bloqueantes a preload inmediatamente
      const convertCSSLinks = () => {
        const cssLinks = document.querySelectorAll('link[rel="stylesheet"]')

        cssLinks.forEach((link: Element) => {
          const htmlLink = link as HTMLLinkElement
          const href = htmlLink.href

          // Solo procesar chunks CSS de Next.js que no sean críticos
          if (href.includes('/chunks/') && href.includes('.css') && !htmlLink.hasAttribute('data-critical')) {
            // Crear preload link inmediatamente
            const preloadLink = document.createElement('link')
            preloadLink.rel = 'preload'
            preloadLink.as = 'style'
            preloadLink.href = href
            preloadLink.crossOrigin = 'anonymous'

            // Convertir a stylesheet después de un breve delay
            setTimeout(() => {
              preloadLink.rel = 'stylesheet'
            }, 100)

            // Reemplazar inmediatamente
            link.parentNode?.replaceChild(preloadLink, link)
          }
        })
      }

      // Ejecutar conversión inmediatamente
      convertCSSLinks()

      // Cleanup opcional - mantener CSS crítico por más tiempo
      const removeCriticalCSS = () => {
        const criticalStyle = document.querySelector('style[data-critical]')
        if (criticalStyle) {
          criticalStyle.remove()
        }
      }

      // Mantener por más tiempo para asegurar cobertura
      setTimeout(removeCriticalCSS, 5000)
    }

    // Ejecutar inmediatamente, no esperar a idle
    injectCriticalCSS()

    // Cleanup
    return () => {
      const criticalStyle = document.querySelector('style[data-critical]')
      if (criticalStyle) {
        criticalStyle.remove()
      }
    }
  }, [])

  return null
}
