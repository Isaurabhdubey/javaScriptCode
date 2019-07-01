var strArray = [{inputName: 'inputText12345.txt', outputName: 'outputText12345.txt'},
{inputName: 'inputText12346.txt', outputName: 'outputText12346.txt'},
{inputName: 'inputText12347.txt', outputName: 'outputText12347.txt'},
{inputName: '12348.txt', outputName: '12348.txt'},
{inputName: '12349.txt', outputName: '12370.txt'},
{inputName: '123456.txt', outputName: '12389.txt'}]
_.chain(strArray).reduce(function(result, str) {
if(str.inputName){
		result.push(_.compact(str.inputName.split(/[inputText .]+/))[0]);
	}
if(str.outputName) {
	result.push(_.compact(str.outputName.split(/[outputText .]+/))[0]);
}
  return result;
}, []).uniq().value()
