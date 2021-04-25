# Planty_ 🌳
Planty é um gerenciador de plantas para sua casa onde você pode adicionar e selecionar o horário para cuidar delas. Este projeto foi desenvolvido durante a Next Level Week 5 (2021) da Rocketseat na trilha de React Native!

<img src="https://user-images.githubusercontent.com/13524043/115967941-a9631b80-a50b-11eb-94c6-cead2772a99c.jpeg" width="390" height="640">


## Como funciona? ❓
No video abaixo, você pode ver um pouco do App, suas funcionalidades e transições! 📹

[![](http://img.youtube.com/vi/GfmHiLHxf4c/0.jpg)](http://www.youtube.com/watch?v=GfmHiLHxf4c "Youtube Vídeo")


## Tecnologias utilizadas 🧑‍💻

Para desenvolver este projeto, diversas tecnologias e libs foram utiilizadas. Abaixo estão listadas algumas e como foram aplicadas no App:

- [ React Native](https://reactnative.dev/ "React Native"): Biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.
- [ Expo ](https://expo.io/ " Expo "): Plataforma de código aberto para fazer aplicativos nativos universais para Android, iOS e web com JavaScript e React.
- [Axios](https://www.npmjs.com/package/react-native-axios "Axios"):Cliente HTTP baseado em promessa para o navegador e node.js;
- Libs:
   - [date-fns](https://date-fns.org/ "date-fns"): manipulação de datas;
   - [gesture-handler](https://docs.expo.io/versions/latest/sdk/gesture-handler/ "gesture-handler"): capturar e utilizar gestos e toques do usuário;
   - [date-time-picker](https://docs.expo.io/versions/latest/sdk/date-time-picker/ "date-time-picker"): adicionarw idget de selecionar datas e horários nativo de cada plataforma;
   - [react-navegation](https://reactnavigation.org/ "react-navigation"): navgeação dentro do app;
   - [async-storage](https://docs.expo.io/versions/latest/sdk/async-storage/ "async-storage"): API de armazenamento valor-chave assíncrona, não criptografada e persistente;
   - [bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/ "bottom-tabs"): Uma barra de guias simples na parte inferior da tela que permite alternar entre diferentes rotas;
   - [notifications](https://docs.expo.io/versions/latest/sdk/notifications/ "notifications"): buscar tokens de notificação push e para apresentar, agendar, receber e responder a notificações;


## Features ✔️
Alguns recursos implementados na aplicação:
- Alterar nome de usuário
- Filtrar os tipos de planta por ambiente mais adequado
- Informações sobre cada planta 
- Adicionar planta aos seus lembretes
- Definir horário para ser avisado de cuidar da planta
- Excluir planta do seu inventário

## Como testar o Aplicativo 📱

Para testar Planty fácil, basta seguir os passos abaixo:
1. Clone o repositório para sua máquina
2. Com o terminal aberto, caminhe até a pasta plantmanager e execute `json-server ./src/services/server.json --host <seu_ip> --port 3333`
3. Com outro terminal aberto, caminhe até a pasta plantmanager e execute `expo start`
4. Execute o app em um simulador ou no seu dispositivo móvel
5. Pronto, é só testar 😄


