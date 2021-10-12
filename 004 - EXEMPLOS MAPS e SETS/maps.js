/* Crie uma função que retorna o nome dos membros de um Map que tem o papel 
'ADMIN' no sistema.

1 - Crie uma função getAdmins que recebe um Map;
2 - Crie um Map e popule-o com nomes de usuários 
e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3 - Dentro de getAdmins, utilize o loop for...of 
para retornar uma lista com os nomes dos usu;arios 
que são administradores. */

// solução 1

const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));

// solução 2

function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Fabio','Admin');
usuarios.set('Carol','Admin');
usuarios.set('Gustavo','User');
usuarios.set('Mayara','User');
usuarios.set('Rebeca','User');

console.log(getAdmins(usuarios));

