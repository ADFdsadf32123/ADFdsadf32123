//此函数用于新增数据
function s1(){
    /** @type {HTMLTableElement} */
    var table=document.getElementById('table');
    var sun=table.rows.length; //获取插入位置
    table.insertRow(sun);
    var b=table.insertRow(sun);
    var s1=b.insertCell(0);
    var s2=b.insertCell(1);
    var s3=b.insertCell(2);
    s1.innerHTML='未命名';
    s2.innerHTML='无联系方式';
    s3.innerHTML='<button onclick="edit(this)">编辑</button><button onclick="de(this)">删除</button>';
}

//此函数用于删除数据
function de(button){
    // console.log(button);
    var row=button.parentNode.parentNode; //这里用两个.parentNode来获取删除按钮的tr标签
    row.parentNode.removeChild(row); //负责删除数据，先获取父节点，然后使用删除函数删除节点
}
//此函数用于编辑数据
function edit(button){
    var row=button.parentNode.parentNode; //这里用两个.parentNode来获取删除按钮的tr标签
    var s1=row.cells[0];
    var s2=row.cells[1];
    var r1=prompt("请输入名字");
    var r2=prompt("请输入联系方式");
    s1.innerHTML=r1;
    s2.innerHTML=r2;
}
