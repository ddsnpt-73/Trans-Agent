const dictionary = {
  "hello": "नमस्कार",
  "hi": "नमस्कार",
  "how are you": "तुम्ही कसे आहात",
  "i am fine": "मी छान आहे",
  "thank you": "धन्यवाद",
  "please": "कृपया",
  "good morning": "शुभ प्रभात",
  "good night": "शुभ रात्र",
  "yes": "होय",
  "no": "नाही",
  "name": "नाव",
  "what": "काय",
  "where": "कुठे",
  "when": "कधी",
  "why": "का",
  "who": "कोण",
  "how": "कसे",
  "i love you": "मी तुला प्रेम करतो",
  "bye": "नमस्कार",
  "sorry": "माफ करा",
  "excuse me": "क्षमा करा"
};

const reverseDict = {};
for (let en in dictionary) {
  reverseDict[dictionary[en]] = en;
}

function translate(src, dest) {
  const input = document.getElementById("inputText").value.trim().toLowerCase();
  const outputArea = document.getElementById("outputText");

  if (!input) {
    outputArea.value = "कृपया काहीतरी लिहा!";
    return;
  }

  let result = "";

  if (src === "en" && dest === "mr") {
    for (let key in dictionary) {
      const regex = new RegExp('\\b' + key + '\\b', 'g');
      input = input.replace(regex, dictionary[key]);
    }
    result = input;
  } else if (src === "mr" && dest === "en") {
    let temp = input;
    for (let mr in reverseDict) {
      const regex = new RegExp(mr, 'g');
      temp = temp.replace(regex, reverseDict[mr]);
    }
    result = temp;
  }

  outputArea.value = result || "अनुवाद उपलब्ध नाही";
}

function clearAll() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}
