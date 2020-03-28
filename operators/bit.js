const Flags = {
  
  // 0001 = 1
  A: 1,
  
  // 0010 = 2
  B: 1<<1,

  // 0100 = 4
  C: 1<<2,
  
  // 1000 = 8
  D: 1<<3
}

/**
 * 显示标志的二进制字符串（填充到4位）
 */
function showFlag(num) {
  const str = num.toString(2).padStart(4, 0);
  console.log(str);
}


function convertToBinaryStrTest() {
  console.log('--------------------转换为二进制字符串--------------------');
  console.log((10).toString(2));
}
// convertToBinaryStrTest();


function convertFromBinaryStrTest() {
  console.log('--------------------二进制字符串转换为数字--------------------');
  const num = parseInt('1010', 2);
  console.log(num);
}
// convertFromBinaryStrTest();


function createMaskTest() {
  
  console.log('--------------------组织Mask--------------------');
  // 0001 | 0010 | 1000 => 1011
  let mask = Flags.A | Flags.B | Flags.D;
  console.log(mask.toString(2));
}
// createMaskTest();



function checkSingleFlagTest() {

  // 通过&运算，检查某个标志位是否设置
  console.log('--------------------检查某个标志为是否设置--------------------');
  const flags = parseInt('1010', 2);
  const isBSet = flags & Flags.B;
  const isCSet = flags & Flags.C;
  
  if (isBSet === Flags.B) {
    console.log('B is setted');
    console.log(isBSet.toString(2).padStart(4, 0));
  }
  
  if (isCSet === 0) {
    console.log(`C isn't setted`);
    console.log(isCSet.toString(2).padStart(4, 0));
  }
}
// checkSingleFlagTest();


// 先对两个标志进行 | 运算，然后与flags做&运算，来检测flags是否同时具备这两个标志
function checkMultiFlagsTest() {

  // 通过&运算，检查某个标志位是否设置
  console.log('--------------------检查多个标志为是否设置--------------------');
  
  // 1010
  const flags = parseInt('1010', 2);
  
  // 0010 | 1000 = 1010;
  const BDMasks = Flags.B | Flags.D;
  
  // 1010 & 1010 = 
  const isBDSet = flags & BDMasks;
  if (isBDSet === BDMasks) {
    console.log('B和D 都设置了');
    console.log(isBDSet.toString(2).padStart(4, 0));
  }
}
// checkMultiFlagsTest();


// 使用 | 运算符设置某个标志
function setSingleFlagTest() {
  console.log('--------------------设置单个标志位--------------------');
  const noneFlag = parseInt('0000', 2);
  const setFlag = noneFlag | Flags.B;
  showFlag(setFlag);
}
setSingleFlagTest();


// 使用 | 运算符设置多个标志
function setMultiFlagsTest() {

  console.log('--------------------设置多个标志位--------------------');
  const noneFlag = parseInt('0000', 2);
  const setFlag = noneFlag | (Flags.B | Flags.C);
  showFlag(setFlag);
}
setMultiFlagsTest();


// 先对要清空的Flag取反，然后再&运算
function clearSingleFlagTest() {
  console.log('--------------------清空单个标志为是--------------------');
  const allFlag = parseInt('1111', 2);
  const clearedFlag = allFlag & (~Flags.B);
  showFlag(clearedFlag);
}
clearSingleFlagTest();


// 1、先对要清空的多个标志位进行 | 运算；
// 2、对1中的结果取反；
// 3、将当前标志与取反结果进行 &
function clearMultiFlagsTest() {

  console.log('--------------------清空多个标志为是--------------------');
  const allFlag = parseInt('1111', 2);
  const clearedFlag = allFlag & (~(Flags.B | Flags.C));
  showFlag(clearedFlag);
}
clearMultiFlagsTest();