```javascript
// Example of an uncommon Tailwind CSS bug involving a conflict between custom styles and Tailwind's default styles.
<div class="bg-gray-100 p-4">
  <div class="relative">
    <div class="absolute top-0 left-0 w-full h-full bg-red-500 opacity-50"></div>
    <p class="text-white z-10">This text should be on top</p>
  </div>
</div>
```