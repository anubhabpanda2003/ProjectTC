function submitForm(event) {
  event.preventDefault();
  analyzeCode();
  $(".result").show();
}

function analyzeCode() {
  // Get code from textarea
  var code = document.getElementById("codeTextarea").value;

  // Count the number of for and while loops
  var forLoopCount = countLoops(code, "for");
  var whileLoopCount = countLoops(code, "while");

  // Count the number of function calls
  var functionCallCount = countFunctionCalls(code);

  // Count the number of if conditions
  var ifConditionCount = countConditions(code, "if");

  // Count the number of else conditions
  var elseConditionCount = countConditions(code, "else");

  // Set assumptions about complexities
  var timeComplexity = calculateTimeComplexity(
    forLoopCount,
    whileLoopCount,
    functionCallCount,
    ifConditionCount,
    elseConditionCount
  );
  var auxiliarySpace = calculateAuxiliarySpace(
    forLoopCount,
    whileLoopCount,
    functionCallCount,
    ifConditionCount,
    elseConditionCount
  );

  // Display results
  document.getElementById("timeComplexity").value =
    determineTimeComplexity(timeComplexity);
  document.getElementById("auxiliarySpace").value =
    determineSpaceComplexity(auxiliarySpace);
}

function countLoops(code, loopType) {
  var loopPattern = new RegExp(loopType + "\\s*\\(", "g");
  var loopMatches = code.match(loopPattern);
  return loopMatches ? loopMatches.length : 0;
}

function countFunctionCalls(code) {
  var functionCallPattern = /\b\w+\s*\(/g;
  var functionCallMatches = code.match(functionCallPattern);
  return functionCallMatches ? functionCallMatches.length : 0;
}

function countConditions(code, conditionType) {
  var conditionPattern = new RegExp(conditionType + "\\s*\\(", "g");
  var conditionMatches = code.match(conditionPattern);
  return conditionMatches ? conditionMatches.length : 0;
}

function calculateTimeComplexity(
  forLoops,
  whileLoops,
  functionCalls,
  ifConditions,
  elseConditions
) {
  // You can implement a more sophisticated algorithm based on your specific requirements
  var timeComplexity =
    forLoops * 2 +
    whileLoops * 3 +
    functionCalls * 2 +
    ifConditions +
    elseConditions;
  return timeComplexity;
}

function calculateAuxiliarySpace(
  forLoops,
  whileLoops,
  functionCalls,
  ifConditions,
  elseConditions
) {
  // You can implement a more sophisticated algorithm based on your specific requirements
  var auxiliarySpace =
    forLoops + whileLoops + functionCalls + ifConditions + elseConditions;
  return auxiliarySpace;
}

function determineTimeComplexity(value) {
  if (value === 0) {
    return "O(1)";
  } else if (value <= 10) {
    return "O(n)";
  } else if (value <= 20) {
    return "O(n^2)";
  } else if (value <= 50) {
    return "O(log n)";
  } else if (value <= 200) {
    return "O(n^n)";
  } else {
    return "O(∞)";
  }
}

function determineSpaceComplexity(value) {
  // No space complexity analysis in this simplified version
  return "O(1)";
}
