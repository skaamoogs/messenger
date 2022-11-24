import Block from "../modules/block";

export default function render(query: string, block: Block) {
  const root = document.querySelector(query);
  const element = block.getContent();
  if (root && element) {
    root.appendChild(element);
  }
  block.dispatchComponentDidMount();
  return root;
}
