# Alterações pendentes (working tree)

Resumo das mudanças presentes no working directory, ainda não commitadas, prontas para `git add` / `git commit`.

## Resumo

- Estrutura de rotas extraída do `App.tsx` para dentro de `src/routes/`.
- Tela `Onboarding` movida de `screens/` para `src/screens/`.
- Ajustes de configuração em `app.json` e `tsconfig.json`.

## Arquivos novos (untracked)

### `src/routes/index.tsx`
Novo componente `AppRoutes`, ponto de entrada das rotas do app. Hoje decide entre `AuthRoutes` e uma tela placeholder (`<Text>App</Text>`) com base em um objeto `user` mockado (`{}` — sempre truthy, então sempre renderiza `AuthRoutes`).

### `src/routes/auth.routes.tsx`
Novo componente `AuthRoutes`, com um `Native Stack Navigator` contendo a tela `Onboarding` (`headerShown: false`).

> Nota: `initialRouteName="Onboard"` não bate com o nome da rota registrada (`"Onboarding"`) — vale conferir se isso é intencional.

### `src/screens/Onboarding.tsx`
Cópia do antigo `screens/Onboarding.tsx` (conteúdo idêntico), agora dentro de `src/`.

## Arquivos modificados

### `App.tsx`
- Removido o `Stack.Navigator` inline e o import direto da `OnboardingScreen`; agora `App.tsx` apenas renderiza `<AppRoutes />` (de `./src/routes`).
- Removido o import e uso de `StatusBar` (`expo-status-bar`).

### `app.json`
- `web.output`: `"static"` → `"single"`.

### `tsconfig.json`
- Removido `"expo-env.d.ts"` do array `include` (mantido `**/*.ts` e `**/*.tsx`).

## Arquivos removidos

### `screens/Onboarding.tsx`
Removido da raiz — conteúdo migrado para `src/screens/Onboarding.tsx` (ver acima).

## Diff stat

```
 App.tsx                |  9 ++-------
 app.json               |  2 +-
 screens/Onboarding.tsx | 26 --------------------------
 tsconfig.json          |  3 +--
 4 files changed, 4 insertions(+), 36 deletions(-)

 3 arquivos novos (untracked):
 src/screens/Onboarding.tsx
 src/routes/index.tsx
 src/routes/auth.routes.tsx
```
