# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


redux notes

redux and react-redux is diffrent
redux is core library
and react reduc is for implementation in react dor wiring

redux took=l kit generates the automation of state

1-start with store ONLY ONE
 configurestore
 add reducer

2-make reducer with SLICE also called features
  -create slice
   -need
    -name
    -initialsate
    -reducers (functions)
     -sate:-gives updated value 
     -action-action u need to have or value

3-UseDispatch & useSelector
 -useSelector gives a callback of sate or all values
 -usedispatch gives value to action
 

4-wrapper (provider)
 -USE PROVIDER and give store as a value


