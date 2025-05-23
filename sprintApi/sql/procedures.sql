
-- PROCEDURE: listar histórico dereservas de um usuário

DELIMITER //

CREATE PROCEDURE historicoReservaUsuario (
    p_id_usuario int
)
BEGIN
    SELECT data, hora_inicio, hora_fim, fk_id_sala
    FROM reserva
    WHERE p_id_usuario = fk_id_usuario;

END; //

DELIMITER ;

CALL  historicoReservaUsuario(1);

-- PROCEDURE: filtro de salas pelo nome ou descrição

DELIMITER //

CREATE PROCEDURE buscarSalas (
  IN p_termo VARCHAR(100)
)
BEGIN
  SELECT *
  FROM sala
  WHERE nome LIKE CONCAT('%', p_termo, '%')
     OR descricao LIKE CONCAT('%', p_termo, '%');
END //

DELIMITER ;

CALL buscarSalas("modelagem");