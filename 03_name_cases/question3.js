"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Liaqat Khan";
// lower case
console.log("lowercase:", personName.toLowerCase());
// UPPER CASE
console.log("upercase:", personName.toUpperCase());
// Title Case
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
