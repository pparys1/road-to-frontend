// Ćwiczenie 19 - pierwszy skrypt
alert("Witaj na mojej stronie!"); // okienko powitalne

console.log("JavaScript działa!"); // wiadomość w konsoli DevTools

// Ćwiczenie 20 - zmiana nagłówka po kliknięciu

// Pobieramy elementy ze strony
const title = document.getElementById("main-title"); // tworzy stałą zmienną o nazwie title, która przechowuje odwołanie do ID elementu nagłówka w dokumencie html tj. main-title
const button = document.getElementById("change-title"); // tworzy stałą zmienną o nazwie button, która przechowuje odwołanie do ID elementu przycisku w dokumencie html tj. change-title

// Reakcja na kliknięcie
button.addEventListener("click", function() {
  title.textContent = "Witaj w świecie JavaScript!";
}); // do zmiennej button ustaw zdarzenie o następujących parametrach: kliknięcie powoduje zmianę tekstu przypisanej do zmiennej title odwołującej się do ID nagłówka w dokumencie html

// Ćwiczenie 21 - zmiana koloru nagłówka

const colorButton = document.getElementById("change-color"); // tworzy stałą zmienną o nazwie colorButton, która przechowuje odwołanie do ID elementu przycisku w dokumencie html, tj. change-color

colorButton.addEventListener("click", function() {
  // Losowy kolor w formacie rgb
  const r = Math.floor(Math.random() * 256); // tworzy zmienną r której wartość jest losowa, następnie pomnaża ją przez 256 i wynik zaokrągla w dół
  const g = Math.floor(Math.random() * 256); // tworzy zmienną g której wartość jest losowa, następnie pomnaża ją przez 256 i wynik zaokrągla w dół
  const b = Math.floor(Math.random() * 256); // tworzy zmienną b której wartość jest losowa, następnie pomnaża ją przez 256 i wynik zaokrągla w dół
  const randomColor = `rgb(${r}, ${g}, ${b})`; // tworzy zmienną randomColor, która przyjmuje wartość zmiennych r, g, b w formacie rozpoznawalnym do identyfikacji id koloru RGB

  // Zmiana koloru nagłówka
  title.style.color = randomColor;
});

// Ćwiczenie 22 - walidacja formularza

const form = document.getElementById("contact-form"); // tworzy zmienną form, której wartość odwołuje się do id elementu form w dokumencie html
const nameInput = document.getElementById("name"); // tworzy zmienną nameInput, której wartość odwołuje się do id elementu label w dokumencie html
const emailInput = document.getElementById("email"); // tworzy zmienną emailInput, której wartość odwołuje się do id elementu input w dokumencie html
const message = document.getElementById("form-message"); // tworzy zmienną message, której wartość odwołuje się do id elementu p w dokumencie html

form.addEventListener("submit", function(event) {
  event.preventDefault(); // blokuje domyślne wysyłanie formularza

  if (nameInput.value.trim() === "") {
    message.textContent = "❌ Imię jest wymagane!";
    message.style.color = "red";
    return; // warunek, jeśli tekst wpisany w formularzu jest pusty, wypluj komunikat walidacyjny. Warunek uwzględnia spacje na początku i na końcu które są automatycznie usuwane
  }

  if (emailInput.value.trim() === "") {
    message.textContent = "❌ Email jest wymagany!";
    message.style.color = "red";
    return; // warunek, jeśli tekst wpisany w formularzu jest pusty, wypluj komunikat walidacyjny. Warunek uwzględnia spacje na początku i na końcu które są automatycznie usuwane
  }

  // Jeśli wszystko OK
  message.textContent = "✅ Formularz został wysłany!";
  message.style.color = "green";
});