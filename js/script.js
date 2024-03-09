function sendMessage() {
  var userInput = document.getElementById("user-input");
  var message = userInput.value.trim();
  
  if (message !== "") {
    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("div");
    newMessage.className = "chat-message from-user";
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);

    // Очищаем поле ввода после отправки сообщения
    userInput.value = "";

    // Прокручиваем чат вниз, чтобы показать новое сообщение
    chatBox.scrollTop = chatBox.scrollHeight;

    // Отвечаем на сообщение пользователя
    setTimeout(function() {
      respondToUser(message);
    }, 500);
  }
}

function respondToUser(message) {
  var response = "";

  if (message.toLowerCase().includes("привет")) {
    response = "Привет, как я могу помочь?";
  } else if (message.toLowerCase().includes("как дела")) {
    response = "Хорошо, спасибо! А у вас?";
  } else if (message.toLowerCase().includes("спасибо")) {
    response = "Пожалуйста! Если у вас есть еще вопросы, не стесняйтесь спрашивать.";
  } else if (message.toLowerCase().includes("пока")) {
    response = "До свидания! Если у вас возникнут еще вопросы, обращайтесь.";
  } else if (message.toLowerCase().includes("как тебя зовут")) {
    response = "Меня зовут СГК - это сокращение от Семантический Генератор кода. Я здесь, чтобы помочь вам.";
  } else if (message.toLowerCase().includes("что ты умеешь")) {
    response = "Я могу отвечать на ваши вопросы, предоставлять информацию и помогать в различных задачах связанных с программированием и не только.";
  } else if (message.toLowerCase().includes("сгенерируй код который выдает случайное число от 1 до 100")) {
    response = "Вот код который выдает случайное число от 1 до 100: <div class='code-box'><pre><code class='java'>import java.util.Random;\n\npublic class Main {\n    public static void main(String[] args) {\n        Random random = new Random();\n        int randomNumber = random.nextInt(100) + 1;\n        System.out.println(randomNumber);\n    }\n}</code></pre></div> *Примечание* Не забудьте скопировать код перед тем как нажимать кнопку:";
  } else if (message.toLowerCase().includes("пример сортировки массива")) {
    response = "Вот пример сортировки массива: <div class='code-box'><pre><code class='java'>import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3};\n        Arrays.sort(arr);\n        System.out.println(\"Sorted array: \" + Arrays.toString(arr));\n    }\n}</code></pre></div> *Примечание* Не забудьте скопировать код перед тем как нажимать кнопку:";
  } else if (message.toLowerCase().includes("как настроение")) {
      response = "Всегда готов помочь! Как могу быть полезным?";
  } else if (message.toLowerCase().includes("ты человек или машина")) {
      response = "Я - чат-бот, созданный для помощи в программировании и других вопросах.";
  } else if (message.toLowerCase().includes("ты умеешь любить")) {
      response = "Я - программа, поэтому мое понимание эмоций ограничено. Но я готов помочь вам!";
  } else if (message.toLowerCase().includes("какой твой любимый язык программирования")) {
      response = "Я не имею предпочтений в языках программирования, я могу работать с любым из них!";
  } else if (message.toLowerCase().includes("как тебя создали")) {
      response = "Я был разработан командой инженеров как часть проекта по искусственному интеллекту.";
  } else if (message.toLowerCase().includes("есть ли у тебя семья")) {
      response = "Я - виртуальный ассистент, поэтому у меня нет семьи в обычном понимании этого слова.";
  } else if (message.toLowerCase().includes("что делаешь в свободное время")) {
      response = "В свободное время я обычно обрабатываю запросы пользователей и учусь новым вещам!";
  } else if (message.toLowerCase().includes("что ты думаешь о искусственном интеллекте")) {
      response = "Искусственный интеллект - удивительная технология, которая может принести множество пользы, если используется правильно.";
  } else if (message.toLowerCase().includes("сгенерируй код простого инвенторя для игры")) {
    response = "<div class='code-box'><pre><code class='java'>import java.util.HashMap;\nimport java.util.Map;\n\npublic class Inventory {\n    private Map<String, Integer> items;\n\n    public Inventory() {\n        items = new HashMap<>();\n    }\n\n    public void addItem(String itemName, int quantity) {\n        if (items.containsKey(itemName)) {\n            int currentQuantity = items.get(itemName);\n            items.put(itemName, currentQuantity + quantity);\n        } else {\n            items.put(itemName, quantity);\n        }\n    }\n\n    public void removeItem(String itemName, int quantity) {\n        if (items.containsKey(itemName)) {\n            int currentQuantity = items.get(itemName);\n            if (currentQuantity > quantity) {\n                items.put(itemName, currentQuantity - quantity);\n            } else if (currentQuantity == quantity) {\n                items.remove(itemName);\n            } else {\n                System.out.println(\"Not enough \" + itemName + \" in the inventory.\");\n            }\n        } else {\n            System.out.println(itemName + \" is not in the inventory.\");\n        }\n    }\n\n    public void displayInventory() {\n        System.out.println(\"Inventory:\");\n        for (Map.Entry<String, Integer> entry : items.entrySet()) {\n            System.out.println(entry.getKey() + \": \" + entry.getValue());\n        }\n    }\n\n    public static void main(String[] args) {\n        Inventory inventory = new Inventory();\n        inventory.addItem(\"Sword\", 1);\n        inventory.addItem(\"Potion\", 5);\n        inventory.displayInventory();\n\n        inventory.removeItem(\"Potion\", 3);\n        inventory.displayInventory();\n\n        inventory.removeItem(\"Sword\", 1);\n        inventory.displayInventory();\n    }\n}</code></pre></div>";
  } else {
      response = "Извините, я не могу понять ваш запрос. Могли бы вы задать вопрос по программированию или связанный с моими функциями?";
  }

  var chatBox = document.getElementById("chat-box");
  var newMessage = document.createElement("div");
  newMessage.className = "chat-message from-assistant";
  newMessage.innerHTML = response;
  
  // Добавляем кнопку "Тестировать" к сообщению с кодом
  if (response.includes("code-box")) {
    var testButton = document.createElement("button");
    testButton.textContent = "Тестировать";
    testButton.className = "test-button";
    testButton.onclick = function() {
      testCode(message);
    };
    newMessage.appendChild(testButton);
  }
  
  chatBox.appendChild(newMessage);

  // Прокручиваем чат вниз, чтобы показать новое сообщение
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Функция для открытия новой вкладки с тестовым сайтом
function testCode(code) {
  var testUrl = "https://www.jdoodle.com/online-java-compiler" + encodeURIComponent(code);
  window.open(testUrl, "_blank");
}

document.getElementById("user-input").addEventListener("keydown", function(event) {
  // Нажата клавиша Enter
  if (event.key === "Enter") {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    sendMessage();
  }
});
// Очистка чата
function clearChat() {
  var chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = ""; // Удаление всех дочерних элементов
}
