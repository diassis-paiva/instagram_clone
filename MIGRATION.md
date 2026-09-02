# Migração: expo-router → React Navigation

Registro das mudanças feitas para trocar o roteamento por arquivo (expo-router) por
uma navegação explícita com React Navigation.

## Removido

- Pacote `expo-router` (`npm uninstall expo-router`).
- Pasta `app/` inteira (rotas do expo-router: `_layout.tsx`, `(tabs)/`, `modal.tsx`).
- Boilerplate do template padrão do Expo, sem relação com o projeto:
  - `components/` (external-link, haptic-tab, hello-wave, parallax-scroll-view,
    themed-text, themed-view, ui/collapsible, ui/icon-symbol*)
  - `constants/theme.ts`
  - `hooks/use-color-scheme*.ts`, `hooks/use-theme-color.ts`
  - `scripts/reset-project.js`
- `app.json`: plugin `"expo-router"` e experiment `"typedRoutes"`.
- `tsconfig.json`: entrada `.expo/types/**/*.ts` do `include` (gerada pelo router).

## Adicionado

- `@react-navigation/native-stack` (`npx expo install`), para a pilha de telas.
  `@react-navigation/native`, `react-native-screens`, `react-native-safe-area-context`
  e `react-native-gesture-handler` já estavam instalados.
- [index.ts](index.ts) — novo entry point do app (`registerRootComponent`).
- [App.tsx](App.tsx) — raiz da navegação: `SafeAreaProvider` + `NavigationContainer`
  + `Stack.Navigator` com a tela `Onboarding`.
- [screens/onboarding-screen.tsx](screens/onboarding-screen.tsx) — primeira tela,
  mostra a logo do Instagram (SVG) centralizada.

## Alterado

- `package.json`: `"main"` passou de `"expo-router/entry"` para `"index.ts"`;
  removido o script `reset-project` (apontava para arquivo apagado).
- `app.json`: sem o plugin/experiment do router (ver acima).

## Como o app inicia agora

```
index.ts → registerRootComponent(App)
App.tsx  → SafeAreaProvider > NavigationContainer > Stack.Navigator
                                                        └─ Onboarding (screens/onboarding-screen.tsx)
```

Sem roteamento por arquivo: toda tela nova precisa ser registrada manualmente como
`<Stack.Screen>` dentro de [App.tsx](App.tsx) (e adicionada ao tipo `RootStackParamList`
para o autocomplete/typecheck de navegação).

## Segue igual

- SVG como componente: [metro.config.js](metro.config.js) (`react-native-svg-transformer`)
  + [svg.d.ts](svg.d.ts) (declaração de tipos para `*.svg`) — nada mudou aqui.
- Alias `@/*` no `tsconfig.json` continua apontando para a raiz do projeto.

## Verificado

- `npx tsc --noEmit` — sem erros.
- `npx expo lint` — sem erros.
