document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ',        paciente: 'FRANCISCA ROJAS', rut: '9878782-1',  prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA',  rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ',       paciente: 'ARMANDO LUNA',    rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY',       paciente: 'MANUEL GODOY',    rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO',        paciente: 'RAMON ULLOA',     rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8',  prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);


//Codigo Ejercicio 1 ( Agregar las siguientes horas al arreglo de Traumatología)

traumatologia.push(
  {hora: '9:00',  especialista: 'RENÉ POBLETE',    paciente: 'ANA GELLONA',     rut: '13123329-7',  prevision: 'ISAPRE'},
  {hora: '9:30',  especialista: 'MARIA SOLAR ',    paciente: 'RAMIRO ANDRADE',  rut: '12221451-K',  prevision: 'FONASA'},
  {hora: '10:00', especialista: 'RAUL LOYOLA ',    paciente: 'CARMEN ISLA ',    rut: '10112348-3',  prevision: 'ISAPRE'},
  {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA',    rut: '13453234-1',  prevision: 'ISAPRE'},
  {hora: '12:00', especialista: 'MATIAS ARAVENA ', paciente: 'SUSANA POBLETE ', rut: '14345656-6',  prevision: 'FONASA'},
)
console.log(traumatologia);

//Codigo Ejercicio 2 (Eliminar el primer y último elemento del arreglo de Radiología)
radiologia.shift();
radiologia.pop();
console.log(radiologia);


//Codigo Ejericio 3 (separando por un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo)

document.write(`<p> ${radiologia[0].hora} - ${radiologia[0].especialista} - ${radiologia[0].paciente} - ${radiologia[0].rut} - ${radiologia[0].prevision}</p>`);
document.write(`<p> ${radiologia[1].hora} - ${radiologia[1].especialista} - ${radiologia[1].paciente} - ${radiologia[1].rut} - ${radiologia[1].prevision}</p>`);
document.write(`<p> ${radiologia[2].hora} - ${radiologia[2].especialista} - ${radiologia[2].paciente} - ${radiologia[2].rut} - ${radiologia[2].prevision}</p>`);
document.write(`<p> ${radiologia[3].hora} - ${radiologia[3].especialista} - ${radiologia[3].paciente} - ${radiologia[3].rut} - ${radiologia[3].prevision}</p>`);
document.write(`<p> ${radiologia[4].hora} - ${radiologia[4].especialista} - ${radiologia[4].paciente} - ${radiologia[4].rut} - ${radiologia[4].prevision}</p>`)


//Codigo Ejercicio 4 (Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. )
document.write(`<p> ${radiologia[0].paciente}</p>`);
document.write(`<p> ${radiologia[1].paciente}</p>`);
document.write(`<p> ${radiologia[2].paciente}</p>`);
document.write(`<p> ${radiologia[3].paciente}</p>`);
document.write(`<p> ${radiologia[4].paciente}</p>`);
document.write(`<p> ${traumatologia[0].paciente}</p>`);
document.write(`<p> ${traumatologia[1].paciente}</p>`);
document.write(`<p> ${traumatologia[2].paciente}</p>`);
document.write(`<p> ${traumatologia[3].paciente}</p>`);
document.write(`<p> ${traumatologia[4].paciente}</p>`);
document.write(`<p> ${traumatologia[5].paciente}</p>`);
document.write(`<p> ${traumatologia[6].paciente}</p>`);
document.write(`<p> ${traumatologia[7].paciente}</p>`);
document.write(`<p> ${traumatologia[8].paciente}</p>`);
document.write(`<p> ${traumatologia[9].paciente}</p>`);
document.write(`<p> ${traumatologia[10].paciente}</p>`);
document.write(`<p> ${traumatologia[11].paciente}</p>`);
document.write(`<p> ${dental[0].paciente}</p>`);
document.write(`<p> ${dental[1].paciente}</p>`);
document.write(`<p> ${dental[2].paciente}</p>`);
document.write(`<p> ${dental[3].paciente}</p>`);
document.write(`<p> ${dental[4].paciente}</p>`);
document.write(`<p> ${dental[5].paciente}</p>`)

//Codigo ejercicio 5 (Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental )
var dentalPrevision =
dentalPaciente.filter(function(paciente
){ 
  return paciente.prevision == "ISAPRE"
});
console.log(dentalPrevision);

//Codigo ejercicio 6 (Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología)
var traumatologiaPrevision =
traumatologiaPaciente.filter(function(paciente
){ 
  return paciente.prevision == "FONASA"
});
console.log(traumatologiaPrevision);