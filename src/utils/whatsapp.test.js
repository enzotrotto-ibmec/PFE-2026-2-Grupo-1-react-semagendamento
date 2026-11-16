// Teste do link do WhatsApp. Roda com o Node, sem instalar nada: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { linkWhatsapp } from "./whatsapp.js";

test("linkWhatsapp codifica a mensagem e aceita número sem mensagem", () => {
  assert.equal(linkWhatsapp("5521000000000"), "https://wa.me/5521000000000");
  assert.match(linkWhatsapp("5521000000000", "Olá & tudo bem?"), /\?text=Ol%C3%A1%20%26%20tudo%20bem%3F$/);
});
