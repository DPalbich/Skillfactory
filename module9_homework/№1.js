const result = {
    list: []
  };
  
  const parser = new DOMParser();
  
  const xmlString = `
    <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
  `;
  
  // console.log('xmlString', xmlString);
  
  const xmlDOM = parser.parseFromString(xmlString, "text/xml");
  const studentsNodes = xmlDOM.querySelectorAll("student");
  
  studentsNodes.forEach((listNode) => {
    var student = new Object();
    const nameNode = listNode.querySelector("name");
    const firstNode = listNode.querySelector("first");
    const secondNode = listNode.querySelector("second");
    const ageNode = listNode.querySelector("age");
    const profNode = listNode.querySelector("prof");
    const langAttr = nameNode.getAttribute('lang');
    
    student.name = firstNode.textContent + ' ' + secondNode.textContent;
      student.age = ageNode.textContent;
      student.prof = profNode.textContent;
      student.lang = nameNode;
      result.list.push(student);
  });
  
  console.log(result);