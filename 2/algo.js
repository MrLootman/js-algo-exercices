// Créez une fonction qui permet de vérifier que le nombre donné en argument est pair

function pair(nombre) {
  if (nombre % 2 === 0) return true;
  else return false;
}

export default pair;

function pair2(nombre) {
  return pair % 2 == 0;
}
