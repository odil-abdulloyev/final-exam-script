const iframe = document.createElement('iframe');
iframe.src = 'https://final-exam-six.vercel.app/';
iframe.width = '100%';
iframe.height = 200;
iframe.style.border = 'none';
document.body.append(iframe);
const style = document.createElement('style');
style.textContent = `* { user-select: text !important; }`;
document.head.append(style);
