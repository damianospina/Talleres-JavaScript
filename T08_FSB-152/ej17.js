let par1=[5,true,false,null,""];
let par2=["5",1,0,undefined,0]

for (let i =0; i<par1.length;i++){
    console.log(`Comparando ${par1[i]} y ${par2[i]} \n-Con ==(con conversion): ${par1[i]==par2[i]} \n-Con ===(sin conversion): ${par1[i]===par2[i]} \n${"-".repeat(30)}`)
}