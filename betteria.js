// console.log(document.styleSheets);

// var styles = document.styleSheets[0];
// var rules = styles.cssRules;
// let count = 0;

// for (var i = 0; i < rules.length; i++) {
//     let text = rules[i].cssText;
//     // console.log(text);
    
//     if (text.includes('background-color')) {
//         let element = text.split('{')[0].trim();
//         // console.log(element, count++);
        
//     }
// }

let link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'userContent.css';

document.head.appendChild(link);
