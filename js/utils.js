export const $ = (sel, ctx = document) => ctx.querySelector(sel);
export const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

export function html(strings, ...values) {
  return strings.reduce((acc, s, i) => acc + s + (values[i] ?? ""), "");
}

export function mount(target, content) {
  if (typeof content === "string") target.innerHTML = content;
  else {
    target.innerHTML = "";
    target.appendChild(content);
  }
}

export function fmt(num) {
  return new Intl.NumberFormat("pt-BR").format(num);
}
