const stockAros = [
	


{codigo:"R13ROM0001", medida:"R13", descripcion:"5 BRAZOS NEGRO CON CROMADO", ancho:"5.5", ET:"35", PCD:"4X100/114", imagen:"productos/R13ROM0001.jpg", cantidad:"1", precio:"1020"},


{codigo:"R14ROM0004", medida:"R14", descripcion:"NEGRO DE 5 BRAZOS VELOZ  CON BRAZOS CROMADOS", ancho:"6", ET:"10", PCD:"4X100/114", imagen:"productos/R14ROM0004.jpg", cantidad:"1", precio:"1104"},
{codigo:"R14ROM0005", medida:"R14", descripcion:"NEGRO DE 14 BRAZOS", ancho:"6", ET:"10", PCD:"4X100/114", imagen:"productos/R14ROM0005.jpg", cantidad:"1", precio:"1152"},
{codigo:"R14ROM0006", medida:"R14", descripcion:"ESTRELLA 5 BRAZOS ABIERTA FILO ROJO", ancho:"6", ET:"30", PCD:"4X100/114", imagen:"productos/R14ROM0006.jpg", cantidad:"1", precio:"1152"},
{codigo:"R14ROM0007", medida:"R14", descripcion:"VELOZ 7 BRAZOS ABIERTA FILO ROJO", ancho:"6", ET:"10", PCD:"4X100/114", imagen:"productos/R14ROM0007.jpg", cantidad:"1", precio:"1152"},
{codigo:"R14HCW0006", medida:"R14", descripcion:"ESTRELLA 5 BRAZOS CUADRADA ABIERTA FILO ROJO", ancho:"6", ET:"30", PCD:"4X100/114", imagen:"productos/R14HCW0006.jpg", cantidad:"1", precio:"1152"},
{codigo:"R14ROM0008", medida:"R14", descripcion:"VELOZ 7 BRAZOS ABIERTA FILO NEGRO", ancho:"6", ET:"10", PCD:"4X100/114", imagen:"productos/R14ROM0008.jpg", cantidad:"1", precio:"1104"},
{codigo:"R14ROM0009", medida:"R14", descripcion:"ESTRELLA 5 BRAZOS ABIERTA FILO AZUL", ancho:"6", ET:"30", PCD:"4X100/114", imagen:"productos/R14ROM0009.jpg", cantidad:"1", precio:"1092"},
{codigo:"R14ROM0010", medida:"R14", descripcion:"VELOZ 4 BRAZOS ABIERTA FILO ROJO", ancho:"6", ET:"20", PCD:"4X100/114", imagen:"productos/R14ROM0010.jpg", cantidad:"1", precio:"1152"},
{codigo:"R14ROM0011", medida:"R14", descripcion:"VELOZ 4 BRAZOS ABIERTA FILO NEGRO", ancho:"6", ET:"20", PCD:"4X100/114", imagen:"productos/R14ROM0011.jpg", cantidad:"1", precio:"1152"},
{codigo:"R14HCW0007", medida:"R14", descripcion:"CONCAVO 7 BRAZOS PLATEADO", ancho:"7", ET:"0", PCD:"4X100/114", imagen:"productos/R14HCW0007.jpg", cantidad:"1", precio:"1152"},
/* {codigo:"ARO15C100", medida:"R15", descripcion:"HCW pestaña", ancho:"8", ET:"0", PCD:"6*139", imagen:"productos/ARO15C100.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO15AP", medida:"R15", descripcion:"HCW PULPO", ancho:"7", ET:"22", PCD:"8*100/114", imagen:"productos/ARO15AP.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO15AS100", medida:"R15", descripcion:"SEGUNDA", ancho:"7", ET:"20", PCD:"8*100/114", imagen:"productos/ARO15AS100.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO15GTRP", medida:"R15", descripcion:"GTR RACING 5 BRAZOS CON PESTAÑA CROMADA", ancho:"", ET:"", PCD:"", imagen:"productos/ARO15GTRP.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO15HCWP", medida:"R15", descripcion:"HCW PULPO PLATEADO", ancho:"7", ET:"0", PCD:"8*100/114", imagen:"productos/ARO15HCWP.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO15NISS", medida:"R15", descripcion:"SEGUNDA", ancho:"", ET:"", PCD:"6*139", imagen:"productos/ARO15NISS.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO15TOY5L", medida:"R15", descripcion:"SEGUNDA 5L", ancho:"", ET:"", PCD:"6*139", imagen:"productos/ARO15TOY5L.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO15FIES", medida:"R15", descripcion:"SEGUNDA", ancho:"5.5", ET:"", PCD:"4*100", imagen:"productos/ARO15FIES.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO15ANCH", medida:"R15", descripcion:"super ancho", ancho:"10", ET:"", PCD:"5*100", imagen:"productos/ARO15ANCH.jpg", cantidad:"0", precio:"0"},
{codigo:"R15HCW0001", medida:"R15", descripcion:"ESTRELLA 5 BRAZOS ABIERTA FILO AMARILLO", ancho:"6,5", ET:"35", PCD:"8X100/114", imagen:"productos/R15HCW0001.jpg", cantidad:"1", precio:"1254"},
{codigo:"R15VAL0001", medida:"R15", descripcion:"ESTRELLA 7 BRAZOS DELGADOS FILO ROJO", ancho:"7", ET:"30", PCD:"8X100/114", imagen:"productos/R15VAL0001.jpg", cantidad:"1", precio:"1254"},
{codigo:"R15BEL0001", medida:"R15", descripcion:"CONCAVO CROMADO PESTAÑA", ancho:"8", ET:"0", PCD:"8X100/114", imagen:"productos/R15BEL0001.jpg", cantidad:"1", precio:"1254"},
{codigo:"R15VAL0002", medida:"R15", descripcion:"ESTRELLA CON GIRO 8 BRAZOS FILO AZUL", ancho:"7", ET:"30", PCD:"8X100/114", imagen:"productos/R15VAL0002.jpg", cantidad:"1", precio:"1254"},
{codigo:"R15HCW0002", medida:"R15", descripcion:"ESTRELLA 5 BRAZOS ABIERTA FILO AZUL", ancho:"6,5", ET:"35", PCD:"8X100/114", imagen:"productos/R15HCW0002.jpg", cantidad:"1", precio:"1254"},
{codigo:"R15VAL0003", medida:"R15", descripcion:"ESTRELLA CON GIRO 8 BRAZOS FILO ROJO", ancho:"7", ET:"30", PCD:"8X100/114", imagen:"productos/R15VAL0003.jpg", cantidad:"1", precio:"1254"},
{codigo:"R15HCW0003", medida:"R15", descripcion:"ESTRELLA 5 BRAZOS ABIERTA FILO ROJO", ancho:"6,5", ET:"35", PCD:"8X100/114", imagen:"productos/R15HCW0003.jpg", cantidad:"1", precio:"1254"},
{codigo:"R15HCW0004", medida:"R15", descripcion:"ESTRELLA 5 BRAZOS ABIERTA PLATA DETALLES DORADOS", ancho:"7", ET:"25", PCD:"8X100/114", imagen:"productos/R15HCW0004.jpg", cantidad:"1", precio:"1254"},
{codigo:"R15AP0001", medida:"R15", descripcion:"NEGRO MATE CON PESTAÑA", ancho:"7", ET:"37", PCD:"4X100", imagen:"productos/R15AP0001.jpg", cantidad:"1", precio:"1254"},
{codigo:"R15VOS0001", medida:"R15", descripcion:"NEGRO MATE 15 BRAZOS DELGADOS", ancho:"7,5", ET:"28", PCD:"8X100/108", imagen:"productos/R15VOS0001.jpg", cantidad:"1", precio:"1254"},
{codigo:"R15KIA0001", medida:"R15", descripcion:"CRUZ 8 BRAZOS NEGRO Y CROMADO", ancho:"6", ET:"35", PCD:"4X100", imagen:"productos/R15KIA0001.jpg", cantidad:"0", precio:"1254"},
{codigo:"R15GOT0001", medida:"R15", descripcion:"CUATRO BRAZOS FILO AZUL, NEGRO CROMADO", ancho:"7", ET:"15", PCD:"8X100/114", imagen:"productos/R15GOT0001.jpg", cantidad:"0", precio:"1254"},
{codigo:"R15URD0001", medida:"R15", descripcion:"5 BRAZOS PARTIDO NEGRO CON CROMADO", ancho:"7", ET:"0", PCD:"8X100/108", imagen:"productos/R15URD0001.jpg", cantidad:"0", precio:"1254"},
{codigo:"R15ROM0001", medida:"R15", descripcion:"ESTRELLA 6 BRAZOS DELGADO FILO TURQUEZA", ancho:"7", ET:"35", PCD:"8X100/114", imagen:"productos/R15ROM0001.jpg", cantidad:"0", precio:"1254"},
{codigo:"R15BBS0001", medida:"R15", descripcion:"CONCAVO CROMADO PESTAÑA INTERIOR NEGRO", ancho:"8", ET:"0", PCD:"8X100/114", imagen:"productos/R15BBS0001.jpg", cantidad:"0", precio:"1320"},
{codigo:"R15MIT0001", medida:"R15", descripcion:"VERSION FULL MITSUBISHI", ancho:"5.5", ET:"46", PCD:"5X114", imagen:"productos/R15MIT0001.jpg", cantidad:"0", precio:"1020"},
{codigo:"R15STR0001", medida:"R15", descripcion:"SIETE BRAZOS CROMADO CON FILO ROJO INTERIOR NEGRO", ancho:"8", ET:"20", PCD:"8X100/114", imagen:"productos/R15STR0001.jpg", cantidad:"0", precio:"1278"},
{codigo:"R15ROM0002", medida:"R15", descripcion:"SEIS BRAZOS DELGADOS CROMADO DETALLES ROJOS INTERIOR NEGRO", ancho:"7", ET:"25", PCD:"8X100/114", imagen:"productos/R15ROM0002.jpg", cantidad:"0", precio:"1338"},
{codigo:"R15ROM0003", medida:"R15", descripcion:"CINCO TENAZAS DELGADOS CROMADO FILO ROJO INTERIOR NEGRO", ancho:"7", ET:"25", PCD:"8X100/114", imagen:"productos/R15ROM0003.jpg", cantidad:"0", precio:"1254"},
{codigo:"R15BEL0002", medida:"R15", descripcion:"16 PUNTAS CROMADAS FILO ROJO INTERIOR NEGRO", ancho:"7", ET:"35", PCD:"8X100/114", imagen:"productos/R15BEL0002.jpg", cantidad:"0", precio:"1254"},
{codigo:"R15ROM0004", medida:"R15", descripcion:"CINCO BRAZOS CROMADOS INTERIOR NEGRO", ancho:"7", ET:"10", PCD:"8X100/114", imagen:"productos/R15ROM0004.jpg", cantidad:"1", precio:"1320"},
{codigo:"R15GOT0002", medida:"R15", descripcion:"CUATRO BRAZOS FILO ROJO, NEGRO CROMADO", ancho:"7", ET:"15", PCD:"8X100/114", imagen:"productos/R15GOT0002.jpg", cantidad:"0", precio:"1254"},
{codigo:"R15ROM0005", medida:"R15", descripcion:"PLATA 5 BRAZOS PARTIDO DETALLES DORADOS", ancho:"8,25", ET:"20", PCD:"8X100/114", imagen:"productos/R15ROM0005.jpg", cantidad:"0", precio:"1314"},
{codigo:"R15FUE0001", medida:"R15", descripcion:"NEGRO 10 BRAZOS ", ancho:"8", ET:"0", PCD:"6X139", imagen:"productos/R15FUE0001.jpg", cantidad:"0", precio:"1560"},
{codigo:"R15BEL0003", medida:"R15", descripcion:"5 BRAZOS CROMADO", ancho:"5.5", ET:"17", PCD:"4X130", imagen:"productos/R15BEL0003.jpg", cantidad:"0", precio:"1380"},
{codigo:"R15DR0001", medida:"R15", descripcion:"PLATA 8 BRAZOS", ancho:"6,5", ET:"35", PCD:"4X100", imagen:"productos/R15DR0001.jpg", cantidad:"0", precio:"1080"},
{codigo:"R15ROM0006", medida:"R15", descripcion:"8 BRAZOS CROMADO CONCAVO", ancho:"8", ET:"0", PCD:"8X100/114", imagen:"productos/R15ROM0006.jpg", cantidad:"1", precio:"1296"},
{codigo:"R15ROM0007", medida:"R15", descripcion:"CINCO BRAZOS CROMADOS INTERIOR NEGRO", ancho:"7", ET:"15", PCD:"8X100/114", imagen:"productos/R15ROM0007.jpg", cantidad:"1", precio:"1308"},
{codigo:"R15NIS0001", medida:"R15", descripcion:"10 BRAZOS CROMADOS CON FILO ROJO INTERNO", ancho:"7", ET:"35", PCD:"8X100/114", imagen:"productos/R15NIS0001.jpg", cantidad:"1", precio:"1308"},
{codigo:"R15HCW0005", medida:"R15", descripcion:"5 TENAZAS CON FILO AZUL INTERNO", ancho:"7", ET:"15", PCD:"4X100/114", imagen:"productos/R15HCW0005.jpg", cantidad:"1", precio:"1330,8"},
{codigo:"R15HCW0006", medida:"R15", descripcion:"5 TENAZAS CON FILO ROJO INTERNO", ancho:"7", ET:"15", PCD:"4X100/114", imagen:"productos/R15HCW0006.jpg", cantidad:"1", precio:"1330,8"},
{codigo:"R15NIS0002", medida:"R15", descripcion:"CINCO BRAZOS CROMADO CON FILO ROJO INTERIOR NEGRO", ancho:"7", ET:"32", PCD:"8X100/114", imagen:"productos/R15NIS0002.jpg", cantidad:"1", precio:"1344"},
{codigo:"R15BEL0004", medida:"R15", descripcion:"CONCAVO CROMADO PESTAÑA INTERIOR NEGRO", ancho:"8", ET:"0", PCD:"10X100/114", imagen:"productos/R15BEL0004.jpg", cantidad:"1", precio:"1344"},
{codigo:"R15BBS0002", medida:"R15", descripcion:"ARO NEGRO CON PESTAÑA CROMADA", ancho:"6,5", ET:"35", PCD:"8X100/108", imagen:"productos/R15BBS0002.jpg", cantidad:"1", precio:"1380"},
{codigo:"R15ROM0008", medida:"R15", descripcion:"DIEZ BRAZOS DORADO MATE", ancho:"8", ET:"0", PCD:"8X100/114", imagen:"productos/R15ROM0008.jpg", cantidad:"1", precio:"1344"},
{codigo:"R15FIE0001", medida:"R15", descripcion:"TOYOTA 5L FIERRO", ancho:"7", ET:"30", PCD:"6*139", imagen:"productos/R15FIE0001.jpg", cantidad:"1", precio:"1320"},
{codigo:"R15BEL0005", medida:"R15", descripcion:"CONCAVO CROMADO PESTAÑA INTERIOR NEGRO", ancho:"9", ET:"0", PCD:"8X100/114", imagen:"productos/R15BEL0005.jpg", cantidad:"1", precio:"1344"},
{codigo:"", medida:"", descripcion:"", ancho:"", ET:"", PCD:"", imagen:"productos/.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO 16", medida:"", descripcion:"", ancho:"", ET:"", PCD:"", imagen:"productos/ARO 16.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO16CL2", medida:"R16", descripcion:"L200 SEGÚNDA", ancho:"7", ET:"", PCD:"", imagen:"productos/ARO16CL2.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO16ORD", medida:"R16", descripcion:"ORD 5 BRAZOS NEGRO", ancho:"7", ET:"", PCD:"", imagen:"productos/ARO16ORD.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO16VAL", medida:"R16", descripcion:"VALEROX CON PESTAÑA CROMADA", ancho:"", ET:"", PCD:"", imagen:"productos/ARO16VAL.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO16CTUFF", medida:"R16", descripcion:"TUFF NEGRO CON DETALLES ROJO", ancho:"", ET:"", PCD:"", imagen:"productos/ARO16CTUFF.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO16TOYF", medida:"R16", descripcion:"TOYOTA DE FIERRO", ancho:"", ET:"", PCD:"", imagen:"productos/ARO16TOYF.jpg", cantidad:"0", precio:"0"},
{codigo:"R16VRA0001", medida:"R16", descripcion:"ESTRELLA PLATA 10 BRAZOS DELGADOS", ancho:"7", ET:"38", PCD:"8X100/114", imagen:"productos/R16VRA0001.jpg", cantidad:"1", precio:"1344"},
{codigo:"R16USA0001", medida:"R16", descripcion:"ESTRELLA 5 BRAZOS ABIERTA COLOR RATA", ancho:"7", ET:"33", PCD:"5X114", imagen:"productos/R16USA0001.jpg", cantidad:"1", precio:"900"},
{codigo:"R16BBS0002", medida:"R16", descripcion:"ESTRELLA NEGRA CON PESTAÑA CROMADA", ancho:"7", ET:"35", PCD:"8X100/114", imagen:"productos/R16BBS0002.jpg", cantidad:"1", precio:"1500"},
{codigo:"R16TOY0001", medida:"R16", descripcion:"ESTRELLA 6 BRAZOS NEGRO CON CROMADO", ancho:"8", ET:"30", PCD:"6X139", imagen:"productos/R16TOY0001.jpg", cantidad:"1", precio:"1620"},
{codigo:"R16RHI0001", medida:"R16", descripcion:"CONCAVO NEGRO MATE 6 BRAZOS DETALLES CROMADOS", ancho:"8", ET:"0", PCD:"6X139", imagen:"productos/R16RHI0001.jpg", cantidad:"1", precio:"1956"},
{codigo:"R16TOY0002", medida:"R16", descripcion:"VERSION FULL 5 BRAZOS NEGRO Y CROMADO", ancho:"7", ET:"0", PCD:"6X139", imagen:"productos/R16TOY0002.jpg", cantidad:"1", precio:"1824"},
{codigo:"R16FUE0001", medida:"R16", descripcion:"ESTRELLA 10 BRAZOS DELGADOS CROMADOS CONTORNO NEGRO", ancho:"8", ET:"0", PCD:"6X139", imagen:"productos/R16FUE0001.jpg", cantidad:"1", precio:"1980"},
{codigo:"R16HYU0001", medida:"R16", descripcion:"VERSION FULL 10 BRAZOS PLATA", ancho:"7", ET:"35", PCD:"5X114", imagen:"productos/R16HYU0001.jpg", cantidad:"1", precio:"900"},
{codigo:"R16SUZ0001", medida:"R16", descripcion:"CINCO BRAZOS NEGRO CON CROMADO", ancho:"6", ET:"50", PCD:"5X114", imagen:"productos/R16SUZ0001.jpg", cantidad:"0", precio:"1140"},
{codigo:"R16FIE0001", medida:"R16", descripcion:"ARO PARA REPUESTO DE FIERRO", ancho:"7", ET:"55", PCD:"6X139", imagen:"productos/R16FIE0001.jpg", cantidad:"0", precio:"540"},
{codigo:"R16FIE0002", medida:"R16", descripcion:"ARO PARA REPUESTO DE FIERRO", ancho:"7", ET:"55", PCD:"6X139", imagen:"productos/R16FIE0002.jpg", cantidad:"0", precio:"540"},
{codigo:"R16HAM0001", medida:"R16", descripcion:"NEGRO CON 6 BRAZOS PARTIDOS DETALLES CROMADOS", ancho:"8,5", ET:"0", PCD:"6X139", imagen:"productos/R16HAM0001.jpg", cantidad:"1", precio:"1800"},
{codigo:"R16RHI0002", medida:"R16", descripcion:"CROMADO CON DETALLES NEGROS ", ancho:"8,5", ET:"0", PCD:"6X139", imagen:"productos/R16RHI0002.jpg", cantidad:"0", precio:"1920"},
{codigo:"R16TUF0001", medida:"R16", descripcion:"6 YE CROMADAS INTERIOR NEGRO", ancho:"7", ET:"0", PCD:"6X139", imagen:"productos/R16TUF0001.jpg", cantidad:"0", precio:"1740"},
{codigo:"R16BEL0001", medida:"R16", descripcion:"6 BRAZOS CROMADOS INTERIOR NEGRO", ancho:"8", ET:"0", PCD:"6X139", imagen:"productos/R16BEL0001.jpg", cantidad:"0", precio:"1620"},
{codigo:"R16ROM0001", medida:"R16", descripcion:"NEGRO 10 PUNTAS CON DETALLES CROMADOS", ancho:"7", ET:"30", PCD:"8X100/114", imagen:"productos/R16ROM0001.jpg", cantidad:"0", precio:"1428"},
{codigo:"R16ROM0002", medida:"R16", descripcion:"8 YE NEGRO CON DETALLES CROMADOS", ancho:"8", ET:"0", PCD:"6X139", imagen:"productos/R16ROM0002.jpg", cantidad:"0", precio:"1620"},
{codigo:"R16VAL0001", medida:"R16", descripcion:"ESTRELLA  NEGRA CON BRAZOS DE FILO CROMADO", ancho:"7", ET:"25", PCD:"8X100/114", imagen:"productos/R16VAL0001.jpg", cantidad:"1", precio:"1620"},
{codigo:"R16MIS0001", medida:"R16", descripcion:"DIEZ TENEZAS 5 NEGRAS Y 5 CROMADAS CON FILO ROJO INTERNO", ancho:"7", ET:"35", PCD:"8X100/114", imagen:"productos/R16MIS0001.jpg", cantidad:"1", precio:"1620"},
{codigo:"R16ROM0003", medida:"R16", descripcion:"CINCO TENAZAS ANCHAS CROMADAS CON FILO ROJO INTERNO", ancho:"7", ET:"25", PCD:"8X100/114", imagen:"productos/R16ROM0003.jpg", cantidad:"1", precio:"1548"},
{codigo:"R16RIN0001", medida:"R16", descripcion:"SEIS BRAZOS NEGRO CON PARTES CROMADAS", ancho:"7", ET:"20", PCD:"5X114", imagen:"productos/R16RIN0001.jpg", cantidad:"1", precio:"1860"},
{codigo:"R16BBS0001", medida:"R16", descripcion:"NEGRO 10 PUNTAS CON DETALLES CROMADOS", ancho:"7", ET:"30", PCD:"8X100/114", imagen:"productos/R16BBS0001.jpg", cantidad:"1", precio:"1560"},
{codigo:"R16MOM0001", medida:"R16", descripcion:"10 BRAZOS NEGRO MOMO", ancho:"8", ET:"25", PCD:"5X100/5X114", imagen:"productos/R16MOM0001.jpg", cantidad:"1", precio:"1560"},
{codigo:"ARO 17", medida:"", descripcion:"", ancho:"", ET:"", PCD:"", imagen:"productos/ARO 17.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO17HIF", medida:"R 17", descripcion:"HILUX FIERRO", ancho:"7", ET:"", PCD:"", imagen:"productos/ARO17HIF.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO17HIFUL", medida:"R17", descripcion:"HILUX VERSION FULL", ancho:"", ET:"", PCD:"", imagen:"productos/ARO17HIFUL.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO17MO", medida:"R17", descripcion:"MOMO NEGRO", ancho:"", ET:"", PCD:"", imagen:"productos/ARO17MO.jpg", cantidad:"0", precio:"0"},
{codigo:"R17HCW0001", medida:"R17", descripcion:"NEGRO MATE CON PESTAÑA 6 BRAZOS", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17HCW0001.jpg", cantidad:"0", precio:"1740"},
{codigo:"R17TOY0001", medida:"R17", descripcion:"VERSION FULL5 BRAZOS NEGRO Y CROMADO", ancho:"7,5", ET:"15", PCD:"6X139", imagen:"productos/R17TOY0001.jpg", cantidad:"0", precio:"2088"},
{codigo:"R17TOY0005", medida:"R17", descripcion:"VERSION FULL 6 BRAZOS NEGRO Y CROMADO", ancho:"8", ET:"15", PCD:"6X139", imagen:"productos/R17TOY0005.jpg", cantidad:"1", precio:"2299,8"},
{codigo:"R17TOY0006", medida:"R17", descripcion:"VERSION FULL 6 BRAZOS RATA", ancho:"8", ET:"15", PCD:"6X139", imagen:"productos/R17TOY0006.jpg", cantidad:"1", precio:"2499,6"},
{codigo:"R17ROM0001", medida:"R17", descripcion:"NEGRO MATE DETALLES CROMADOS 10 FLECHAS", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17ROM0001.jpg", cantidad:"0", precio:"2016"},
{codigo:"R17ROM0002", medida:"R17", descripcion:"NEGRO MATE DETALLES CROMADOS 8 BRAZOS", ancho:"8,5", ET:"0", PCD:"6X139", imagen:"productos/R17ROM0002.jpg", cantidad:"0", precio:"2016"},
{codigo:"R17WIC0002", medida:"R17", descripcion:"NEGRO BRILLANTE DETALLES ROJO 8 BRAZOS", ancho:"8,5", ET:"0", PCD:"6X139", imagen:"productos/R17WIC0002.jpg", cantidad:"1", precio:"2299,8"},
{codigo:"R17ROM0017", medida:"R17", descripcion:"NEGRO BRILLANTE DETALLES ROJO 8 BRAZOS", ancho:"8,5", ET:"0", PCD:"6X139", imagen:"productos/R17ROM0017.jpg", cantidad:"1", precio:"2220"},
{codigo:"R17ROM0003", medida:"R17", descripcion:"NEGRO DE 8 BRAZOS YE CROMADOS", ancho:"8,5", ET:"0", PCD:"6X139", imagen:"productos/R17ROM0003.jpg", cantidad:"0", precio:"2016"},
{codigo:"R17VAL0001", medida:"R17", descripcion:"NEGRO MATE 6 BRAZOS CENTRALES", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17VAL0001.jpg", cantidad:"0", precio:"1860"},
{codigo:"R17FUE0001", medida:"R17", descripcion:"ESTRELLA DORADA FILO EXTERNO NEGRO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17FUE0001.jpg", cantidad:"1", precio:"1968"},
{codigo:"R17VAL0002", medida:"R17", descripcion:"ESTRELLA ABIERTA 5 BRAZOS CROMADA INTERIOR NEGRO ", ancho:"7", ET:"30", PCD:"8X100/114", imagen:"productos/R17VAL0002.jpg", cantidad:"1", precio:"1596"},
{codigo:"R17RAY0001", medida:"R17", descripcion:"NEGRO BRILLANTE 5 TENAZAS", ancho:"7,5", ET:"35", PCD:"5X114", imagen:"productos/R17RAY0001.jpg", cantidad:"1", precio:"1650"},
{codigo:"R17BBS0001", medida:"R17", descripcion:"NEGRO BRILLANTE 6 TENAZAS", ancho:"7,5", ET:"35", PCD:"8X100/114", imagen:"productos/R17BBS0001.jpg", cantidad:"1", precio:"1704"},
{codigo:"R17HCW0002", medida:"R17", descripcion:"PLOMO 10 PUNTAS", ancho:"7,5", ET:"35", PCD:"5X114", imagen:"productos/R17HCW0002.jpg", cantidad:"1", precio:"1536"},
{codigo:"R17RAY0002", medida:"R17", descripcion:"PLOMO 5 TENEZAS", ancho:"7,5", ET:"35", PCD:"5X114", imagen:"productos/R17RAY0002.jpg", cantidad:"1", precio:"1680"},
{codigo:"R17RHI0001", medida:"R17", descripcion:"NEGRO MATE CONCAVO 8 BRAZOS", ancho:"9", ET:"12", PCD:"6X139", imagen:"productos/R17RHI0001.jpg", cantidad:"1", precio:"1860"},
{codigo:"R17HCW0003", medida:"R17", descripcion:"PLOMO 5 TENEZAS", ancho:"7,5", ET:"35", PCD:"8X100/114", imagen:"productos/R17HCW0003.jpg", cantidad:"1", precio:"1596"},
{codigo:"R17PDW0001", medida:"R17", descripcion:"GRIS OSCURO MATE 7 BRAZOS", ancho:"8", ET:"35", PCD:"4X100", imagen:"productos/R17PDW0001.jpg", cantidad:"1", precio:"1668"},
{codigo:"R17FUE0002", medida:"R17", descripcion:"CONCAVO NEGRO CON CROMADO 10 BRAZOS DELGADOS", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17FUE0002.jpg", cantidad:"0", precio:"1980"},
{codigo:"R17ROM0006", medida:"R17", descripcion:"CONCAVO NEGRO 10 BRAZOS DELGADOS", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17ROM0006.jpg", cantidad:"0", precio:"2220"},
{codigo:"R17RHI0002", medida:"R17", descripcion:"NEGRO 5 BRAZOS ROBUSTO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17RHI0002.jpg", cantidad:"0", precio:"2340"},
{codigo:"R17ROM0014", medida:"R17", descripcion:"NEGRO 8 PERNOS ROBUSTO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17ROM0014.jpg", cantidad:"1", precio:"2220"},
{codigo:"R17MET0001", medida:"R17", descripcion:"12 BRAZOS NEGRO ", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17MET0001.jpg", cantidad:"0", precio:"2160"},
{codigo:"R17ROM0004", medida:"R17", descripcion:"NEGRO 8 BRAZOS YE ", ancho:"8,5", ET:"0", PCD:"6X114", imagen:"productos/R17ROM0004.jpg", cantidad:"0", precio:"2340"},
{codigo:"R17TRD0001", medida:"R17", descripcion:"NEGRO 8 BRAZOS CON HUECO", ancho:"7,5", ET:"15", PCD:"6X139", imagen:"productos/R17TRD0001.jpg", cantidad:"0", precio:"2220"},
{codigo:"R17FAL0001", medida:"R17", descripcion:"DORADO CON FILO NEGRO ", ancho:"9", ET:"-12", PCD:"6X139", imagen:"productos/R17FAL0001.jpg", cantidad:"1", precio:"1980"},
{codigo:"R17RHI0003", medida:"R17", descripcion:"NEGRO, ESTRELLA CUADRADA CON 2 PUNTAS X ESQUINA", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17RHI0003.jpg", cantidad:"1", precio:"2820"},
{codigo:"R17TOY0002", medida:"R17", descripcion:"PLATA 6 BRAZOS VERSION FULL", ancho:"7,5", ET:"30", PCD:"6X139", imagen:"productos/R17TOY0002.jpg", cantidad:"0", precio:"2760"},
{codigo:"R17RHI0004", medida:"R17", descripcion:"8 BRAZOS CROMADO INTERIOR NEGRO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17RHI0004.jpg", cantidad:"0", precio:"2460"},
{codigo:"R17FUE0005", medida:"R17", descripcion:"NEGRO CON 6 BRAZOS PARTIDO FILO CON TUERCAS CROMADAS", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17FUE0005.jpg", cantidad:"1", precio:"2220"},
{codigo:"R17WLC0001", medida:"R17", descripcion:"NEGRO 6 BRAZOS PARTIDO ", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17WLC0001.jpg", cantidad:"0", precio:"2100"},
{codigo:"R17ROM0005", medida:"R17", descripcion:"5 YE CROMADA INTERIOR NEGRO", ancho:"7,5", ET:"35", PCD:"8X100/114", imagen:"productos/R17ROM0005.jpg", cantidad:"0", precio:"1680"},
{codigo:"R17BEL0001", medida:"R17", descripcion:"CROMADO CON PESTAÑA 9 YE ", ancho:"9", ET:"20", PCD:"8X100/114", imagen:"productos/R17BEL0001.jpg", cantidad:"0", precio:"1680"},
{codigo:"R17ROM0006", medida:"R17", descripcion:"ESTRELLA 5 BRAZOS CROMADA INTERIOR NEGRO CON FILO ROJO", ancho:"7,5", ET:"35", PCD:"8X100/114", imagen:"productos/R17ROM0006.jpg", cantidad:"0", precio:"1620"},
{codigo:"R17VII0001", medida:"R17", descripcion:"NEGRO BRILLANTE10 BRAZOS", ancho:"9", ET:"12", PCD:"10X100/114", imagen:"productos/R17VII0001.jpg", cantidad:"0", precio:"1680"},
{codigo:"R17MET0003", medida:"R17", descripcion:"NEGRO CON 12 BRAZOS DETALLES DORADOS", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17MET0003.jpg", cantidad:"0", precio:"2280"},
{codigo:"R17ROM0007", medida:"R17", descripcion:"8 YE CROMADOS INTERIOR NEGRO", ancho:"8,5", ET:"0", PCD:"6X139", imagen:"productos/R17ROM0007.jpg", cantidad:"0", precio:"1920"},
{codigo:"R17XDS0001", medida:"R17", descripcion:"6 BRAZOS PARTIDO NEGRO", ancho:"8,5", ET:"10", PCD:"6X139", imagen:"productos/R17XDS0001.jpg", cantidad:"0", precio:"1920"},
{codigo:"R17RHI0005", medida:"R17", descripcion:"10 BRAZOS NEGRO CON DETALLE CROMADOS", ancho:"8,5", ET:"0", PCD:"6X139", imagen:"productos/R17RHI0005.jpg", cantidad:"0", precio:"2400"},
{codigo:"R17RHI0006", medida:"R17", descripcion:"6 BRAZOS NEGRO CON DETALLES CROMADOS", ancho:"9", ET:"0", PCD:"5X114", imagen:"productos/R17RHI0006.jpg", cantidad:"0", precio:"2400"},
{codigo:"R17ROM0008", medida:"R17", descripcion:"10 PUNTAS CROMADAS INTERIOR NEGRO CON FILO ROJO", ancho:"8", ET:"25", PCD:"8X100/114", imagen:"productos/R17ROM0008.jpg", cantidad:"0", precio:"1620"},
{codigo:"R17BEL0002", medida:"R17", descripcion:"20 PUNTAS CROMADAS INTERIOR NEGRO CON FILO ROJO", ancho:"7,5", ET:"35", PCD:"8X100/114", imagen:"productos/R17BEL0002.jpg", cantidad:"0", precio:"1620"},
{codigo:"R17BEL0003", medida:"R17", descripcion:"8 BRAZOS CROMADOS INTERIOR NEGRO BRILLANTE CON PESTAÑA", ancho:"9", ET:"12", PCD:"12X139/135", imagen:"productos/R17BEL0003.jpg", cantidad:"0", precio:"1920"},
{codigo:"R17RHI0007", medida:"R17", descripcion:"DORADO CON EXTERIOR NEGRO ", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17RHI0007.jpg", cantidad:"1", precio:"2400"},
{codigo:"R17TUF0001", medida:"R17", descripcion:"6 BRAZOS INTERIOR NEGRO BRILLANTE CON DETALLES CROMADOS", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17TUF0001.jpg", cantidad:"0", precio:"2460"},
{codigo:"R17ROM0009", medida:"R17", descripcion:"12 HUECOS NEGRO CON DETALLES CROMADOS", ancho:"9", ET:"-10", PCD:"6X139", imagen:"productos/R17ROM0009.jpg", cantidad:"1", precio:"2040"},
{codigo:"R17BEL0004", medida:"R17", descripcion:"20 PUNTAS NEGRO CON FILO ROJO", ancho:"7,5", ET:"30", PCD:"8X100/114", imagen:"productos/R17BEL0004.jpg", cantidad:"1", precio:"1620"},
{codigo:"R17MC0001", medida:"R17", descripcion:"ESTRELLA PLOMA DE 7 BRAZOS INTTERIOR NEGRO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17MC0001.jpg", cantidad:"0", precio:"2040"},
{codigo:"R17PDW0002", medida:"R17", descripcion:"ESTRELLA DE 12 PUNTAS FILO NEGRO", ancho:"8", ET:"32", PCD:"10X105/114", imagen:"productos/R17PDW0002.jpg", cantidad:"1", precio:"2160"},
{codigo:"R17BBS0001", medida:"R17", descripcion:"CROMADO CON PESTAÑA 9 YE ", ancho:"9", ET:"20", PCD:"8X100/114", imagen:"productos/R17BBS0001.jpg", cantidad:"1", precio:"1944"},
{codigo:"R17BBS0002", medida:"R17", descripcion:"CROMADO CON PESTAÑA 9 YE ", ancho:"9", ET:"20", PCD:"10X100/114", imagen:"productos/R17BBS0002.jpg", cantidad:"1", precio:"1752"},
{codigo:"R17CHA0001", medida:"R17", descripcion:"5 BRAZOS PLATA", ancho:"7", ET:"45", PCD:"5X108", imagen:"productos/R17CHA0001.jpg", cantidad:"1", precio:"1980"},
{codigo:"R17HCW0005", medida:"R17", descripcion:"ESTRELLA PLATA CON TUERCAS DORADAS", ancho:"8,5", ET:"15", PCD:"8X100/114", imagen:"productos/R17HCW0005.jpg", cantidad:"1", precio:"1980"},
{codigo:"R17MOM0001", medida:"R17", descripcion:"10 BRAZOS NEGRO CON FILO ROJO INTERNO MOMO", ancho:"8", ET:"33", PCD:"5X100/5X114", imagen:"productos/R17MOM0001.jpg", cantidad:"1", precio:"1956"},
{codigo:"R17ROM0010", medida:"R17", descripcion:"10 BRAZOS CROMADOS CON FILO ROJO INTERNO", ancho:"7,5", ET:"35", PCD:"5X100/5X114", imagen:"productos/R17ROM0010.jpg", cantidad:"1", precio:"1860"},
{codigo:"R17MOM0002", medida:"R17", descripcion:"10 BRAZOS NEGRO MOMO", ancho:"8", ET:"25", PCD:"5X100/5X114", imagen:"productos/R17MOM0002.jpg", cantidad:"1", precio:"1884"},
{codigo:"R17MOM0003", medida:"R17", descripcion:"10 BRAZOS PLOMO MOMO", ancho:"8", ET:"25", PCD:"5X100/5X114", imagen:"productos/R17MOM0003.jpg", cantidad:"1", precio:"1716"},
{codigo:"R17ROM0011", medida:"R17", descripcion:"OCHO BRAZOS MODELO RINO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17ROM0011.jpg", cantidad:"1", precio:"2220"},
{codigo:"R17ROM0015", medida:"R17", descripcion:"6 BRAZOS MODELO RINO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17ROM0015.jpg", cantidad:"1", precio:"2220"},
{codigo:"R17FUEL0001", medida:"R17", descripcion:"DIEZ BRAZOS MODELO RINO", ancho:"9", ET:"0", PCD:"6X114", imagen:"productos/R17FUEL0001.jpg", cantidad:"1", precio:"1860"},
{codigo:"R17ROM0012", medida:"R17", descripcion:"SEIS BRAZOS CROMADOS INTERIOR NEGRO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17ROM0012.jpg", cantidad:"1", precio:"2040"},
{codigo:"R17FUEL0002", medida:"R17", descripcion:"DIEZ BRAZOS MODELO RINO BRAZOS ROJOS", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17FUEL0002.jpg", cantidad:"1", precio:"2280"},
{codigo:"R17ROM0013", medida:"R17", descripcion:"PANAL ROJO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17ROM0013.jpg", cantidad:"1", precio:"2220"},
{codigo:"R17CRO0001", medida:"R17", descripcion:"CINCO BRAZOS NEGRO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17CRO0001.jpg", cantidad:"1", precio:"2100"},
{codigo:"R17RIN0001", medida:"R17", descripcion:"CINCO BRAZOS NEGRO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17RIN0001.jpg", cantidad:"1", precio:"2220"},
{codigo:"R17VAL0005", medida:"R17", descripcion:"SEIS BRZOS CON CIRCULO NEGRO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17VAL0005.jpg", cantidad:"1", precio:"2220"},
{codigo:"R17TUF0002", medida:"R17", descripcion:"OCHO BRZOS CROMADOS", ancho:"8", ET:"0", PCD:"6X139", imagen:"productos/R17TUF0002.jpg", cantidad:"1", precio:"2400"},
{codigo:"R17URD0001", medida:"R17", descripcion:"OCHO BRZOS CROMADOS", ancho:"8", ET:"0", PCD:"6X139", imagen:"productos/R17URD0001.jpg", cantidad:"1", precio:"2220"},
{codigo:"R17RIN0003", medida:"R17", descripcion:"OCHO BRZOS CROMADOS", ancho:"8", ET:"0", PCD:"6X139", imagen:"productos/R17RIN0003.jpg", cantidad:"1", precio:"2208"},
{codigo:"R17MOM0003", medida:"R17", descripcion:"OCHO BRAZOS MATE CON PUNTOS EN LOS FILOS", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17MOM0003.jpg", cantidad:"1", precio:"2220"},
{codigo:"R17MC0002", medida:"R17", descripcion:"NUEVE CIRCULOS BRILLANTE", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17MC0002.jpg", cantidad:"1", precio:"2220"},
{codigo:"R17MC0003", medida:"R17", descripcion:"ESTRELLA NEGRA DE 7 BRAZOS INTTERIOR NEGRO FILO ROJO", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R17MC0003.jpg", cantidad:"1", precio:"2280"},
{codigo:"R17KIA0001", medida:"R17", descripcion:"4 BRAZOS ORIGINAL KIA", ancho:"8", ET:"30", PCD:"4x100", imagen:"productos/R17KIA0001.jpg", cantidad:"1", precio:"1380"},
{codigo:"R17NIS0002", medida:"R17", descripcion:"6 BRAZOS ORIGINAL NISSAN NAVARA", ancho:"8", ET:"30", PCD:"6X139", imagen:"productos/R17NIS0002.jpg", cantidad:"1", precio:"2300,4"},
{codigo:"R17ALL0001", medida:"R17", descripcion:"NEGRO BRILLANTE10 BRAZOS", ancho:"9", ET:"25", PCD:"10X100/114", imagen:"productos/R17ALL0001.jpg", cantidad:"0", precio:"1140"},
{codigo:"R17NIS0001", medida:"R17", descripcion:"PLATEADO 6 BRAZOS", ancho:"8", ET:"15", PCD:"6X139", imagen:"productos/R17NIS0001.jpg", cantidad:"1", precio:"2499,6"},
{codigo:"R17BEL0005", medida:"R17", descripcion:"ESTRELLA ROJO 5 BRAZOS", ancho:"8", ET:"15", PCD:"8X100/114", imagen:"productos/R17BEL0005.jpg", cantidad:"1", precio:"1704"},
{codigo:"ARO 18", medida:"", descripcion:"", ancho:"", ET:"", PCD:"", imagen:"productos/ARO 18.jpg", cantidad:"0", precio:"0"},
{codigo:"R18MON0001", medida:"R18", descripcion:"ESTRELLA GRIS FILO NEGRO ", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R18MON0001.jpg", cantidad:"0", precio:"2580"},
{codigo:"R18ROM0001", medida:"R18", descripcion:"ESTRELLA 5 BRAZOS DELGADO CROMADOS INTERIOR NEGRO", ancho:"9", ET:"28", PCD:"5X114", imagen:"productos/R18ROM0001.jpg", cantidad:"0", precio:"2076"},
{codigo:"R18ROM0002", medida:"R18", descripcion:"ESTRELLA 10 BRAZOS DELGADOS CROMADOS INTERIOR NEGRO CON FILO ROJO", ancho:"8,5", ET:"35", PCD:"5X114", imagen:"productos/R18ROM0002.jpg", cantidad:"0", precio:"2076"},
{codigo:"R18RAV0001", medida:"R18", descripcion:"PLOMO 10 BRAZOS DELGADOS", ancho:"8", ET:"38", PCD:"5X114", imagen:"productos/R18RAV0001.jpg", cantidad:"0", precio:"2076"},
{codigo:"R18RHI0001", medida:"R18", descripcion:"6 BRASOZ NEGRO CON DETALLES CROMADOS", ancho:"9", ET:"0", PCD:"6X139", imagen:"productos/R18RHI0001.jpg", cantidad:"0", precio:"2616"},
{codigo:"R18BBS0001", medida:"R18", descripcion:"NEGRO BRILLANTE 10 BRAZOS DELGADOS", ancho:"9", ET:"35", PCD:"5X114", imagen:"productos/R18BBS0001.jpg", cantidad:"0", precio:"2040"},
{codigo:"R18TOY0005", medida:"R18", descripcion:"VERSION FULL 6 BRAZOS PLATEADO", ancho:"8", ET:"15", PCD:"6X139", imagen:"productos/R18TOY0005.jpg", cantidad:"1", precio:"2520"},
{codigo:"", medida:"", descripcion:"", ancho:"", ET:"", PCD:"", imagen:"productos/.jpg", cantidad:"0", precio:"0"},
{codigo:"", medida:"", descripcion:"", ancho:"", ET:"", PCD:"", imagen:"productos/.jpg", cantidad:"0", precio:"0"},
{codigo:"", medida:"", descripcion:"", ancho:"", ET:"", PCD:"", imagen:"productos/.jpg", cantidad:"0", precio:"0"},
{codigo:"", medida:"", descripcion:"", ancho:"", ET:"", PCD:"", imagen:"productos/.jpg", cantidad:"0", precio:"0"},
{codigo:"", medida:"", descripcion:"", ancho:"", ET:"", PCD:"", imagen:"productos/.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO 19.5", medida:"", descripcion:"", ancho:"", ET:"", PCD:"", imagen:"productos/ARO 19.5.jpg", cantidad:"0", precio:"0"},
{codigo:"ARO19.5", medida:"R19.5", descripcion:"CAMION", ancho:"", ET:"", PCD:"", imagen:"productos/ARO19.5.jpg", cantidad:"0", precio:"0"}, */



];




const buscar = () => {
    const textoDiametro = document.getElementById('buscar-producto').value.toUpperCase();
    const textoAncho = document.getElementById('ancho-aros').value.toUpperCase();
    const contenedorProductos = document.getElementById('contenedor-aros');
    const productos = contenedorProductos.querySelectorAll(".producto");

    productos.forEach(producto => {
        const diametro = producto.querySelector("h3");
        const ancho = producto.querySelector("h5");

        const coincideDiametro = diametro
            ? diametro.textContent.toUpperCase().includes(textoDiametro) 
            : false;
        const coincideAncho = ancho 
            ? ancho.textContent.toUpperCase().includes(textoAncho) 
            : false;

        // Mostrar solo si ambos filtros coinciden
        if ((textoDiametro === "" || coincideDiametro) && 
            (textoAncho === "" || coincideAncho)) {
            producto.style.display = "";
        } else {
            producto.style.display = "none";
        }
    });
};
