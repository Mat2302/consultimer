# Consultimer

Clone do site institucional da Consultimer desenvolvido com **Next.js 15**, focado em performance e internacionalização.

## 🚀 Tecnologias

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Internacionalização (i18n):** Middleware/Proxy customizado + Dicionários JSON
- **Idiomas:** Português (pt), Inglês (en), Espanhol (es)

## 🌎 Como funciona a Internacionalização

O projeto utiliza uma estratégia de roteamento baseada em subpastas (`/[lang]/`).
Um `proxy` intercepta as requisições na borda (edge):

1. Verifica o idioma do navegador do usuário.
2. Redireciona automaticamente para `/pt`, `/en` ou `/es`.

## 🛠️ Como rodar

```bash
npm install
npm run dev