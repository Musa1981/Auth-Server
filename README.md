Auth Router
Denna Express.js-router hanterar användarautentisering med hjälp av JSON Web Tokens (JWT) och inkluderar säkerhetsåtgärder med Helmet.

Slutpunkter
POST /login: Autentiserar användare baserat på angivna autentiseringsuppgifter och returnerar en JWT om det är giltigt.

Kommentarer i koden
Importera moduler:

express: Ramverk för att bygga webbapplikationer.
jwt: Bibliotek för att generera och verifiera JSON Web Tokens.
helmet: Middleware för att ställa in HTTP-headers för att förbättra säkerheten.
crypto: Modul för kryptografiska funktioner.
Skapa en routerinstans:

router: Instans av express.Router().

Lägger till säkerhetsheaders med Helmet-middleware.
Definiera autentiseringsruta:

Hanterar POST-begäranden till /login för användarautentisering.
Extraherar e-post och lösenord från begärandekroppen.
Genererar en JWT om användaren är giltig; returnerar annars ett fel.
Funktionskontroll för användarvalidering:

isValidUser(email, password): Kontrollerar om användaren är giltig baserat på e-post och lösenord.
Hämta användarrollsfunktion:

getUserRole(email): Returnerar användarrollen ('admin' eller 'user') baserat på e-post.
Hasha lösenordsfunktion:

hashPassword(password): Hashar lösenord med SHA-256-algoritmen.
Exportera routern:

Exporterar routern för användning i andra filer eller moduler.

Express App Setup
Denna fil konfigurerar en Express.js-applikation med middleware för att hantera autentiseringsrutter, parsa JSON-bodies, aktivera CORS och förbättra säkerheten med Helmet.

Beroenden
express: Ramverk för webbapplikationer för Node.js.
body-parser: Middleware för att parsa begärandekroppar.
authRoutes: Modul som innehåller autentiseringsrutter.
cors: Middleware för att aktivera Cross-Origin Resource Sharing.
helmet: Middleware för att ställa in HTTP-headers för att förbättra säkerheten.
Appkonfiguration
Skapa en instans av Express-appen:

app: Instans av Express-applikationen.
Aktivera CORS:

Använder cors-middleware för att aktivera Cross-Origin Resource Sharing.
Body Parser Middleware:

Använder body-parser-middleware för att parsa JSON-bodies.
Montera autentiseringsrutter:

Monterar autentiseringsrutter från modulen authRoutes under sökvägen '/auth'.
Helmet Middleware:

Använder helmet-middleware för att ställa in HTTP-headers för förbättrad säkerhet.
Exportera Express-appen:

Exporterar den konfigurerade Express-appen för användning i andra filer eller moduler.

Server Configuration
Denna fil konfigurerar servern genom att ladda miljövariabler från en .env-fil, initialisera Express-appen och starta servern på en angiven port.

Beroenden
dotenv: Laddar miljövariabler från en .env-fil.
server.js: Modul som innehåller konfigurationen för Express-appen.
process.env.PORT: Miljövariabel eller standardport (3001).
Start av servern
Ladda miljövariabler:

Använder dotenv för att ladda miljövariabler från en .env-fil.
Initiera Express-appen:

Kräver konfigurationen för Express-appen från modulen server.js.
Ställ in serverporten:

Använder miljövariabeln process.env.PORT om den är tillgänglig; annars används standardporten 3001.
Starta servern:

Lyssnar på inkommande begäranden på den angivna porten.
Skriver ut ett meddelande till konsolen vid lyckad start av servern.
Exportera Express-appen:

Exporterar den konfigurerade Express-appen för användning i andra filer eller moduler.