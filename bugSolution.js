```javascript
// Solution: Use higher z-index values and explicitly set a z-index for the parent to ensure correct stacking context.
<div class="bg-gray-100 p-4 relative z-10">
  <div class="absolute top-0 left-0 w-full h-full bg-red-500 opacity-50 z-0"></div>
  <p class="text-white z-20">This text should be on top</p>
</div>
```