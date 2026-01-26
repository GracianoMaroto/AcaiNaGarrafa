export function whatsappMsg(text: string) {
  return `https://wa.me/5577988890597?text=${encodeURIComponent(text)}`
}
