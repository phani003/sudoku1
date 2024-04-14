
const tableids = [];
const rowno = ['', '', '', '', '', '', '', '', ''];
const verno = ['', '', '', '', '', '', '', '', ''];
const boxno = [];
/*const raa = ['', '', '', '', '', '', '', '', ''];*/
/*const vaa = ['', '', '', '', '', '', '', '', ''];*/
let ra = 1;
let vaaa = 1;
let va = '';
let endids = 0;
function tablecreate(type, shape) {
    if (type != "") {
        let idnu = 11;   
        let tabledata = '';
        let tablecreate = '';
        let tradd = "1";
        let trmadd = "1";
        let rv = '';
        for (j = 0; j < type; j++) {
            let ba = '';
            
            if (trmadd == "1") {
                tablecreate += '<tr>';
            }

            for (k = 0; k < j+1; k++) {
                rv = (3 * k);
                
            }
            if (shape == "h") {
                va = vaaa + rv;
            } else {
                va = vaaa;
            }
            
            tablecreate += "<td><table style='height:198px;width:198px;' id ='td" + j + "' border='0' >";
            let tbids = "td" + j;
            tableids.push(tbids);
            for (k = 1; k < 10; k++) {             
                let raa = "r" + ra;
                let vaa = "v" + va;
                
                if (tradd == "1") {
                    tabledata += '<tr>';
                }          
                
                tabledata += '<td>';
                let baa = j + 1;
                tabledata += '<button   v="' + vaa + '"   r="' + raa + '"   b="b' + baa + '"  class="spdata" style="width:64px;height:64px" onclick="return fnspandata(this.id)" id="p' + idnu + '"  >';
                tabledata += '</td>';

                if (k % 3 == 0) {
                    tabledata += '</tr>';
                    tradd = "1";
                    ra = ra + 1;
                    if (shape == "h") {
                        va = vaaa + rv;
                    } else {
                        va = vaaa;
                    }
                        
                } else {
                    tradd = "";
                    va = va + 1;                  
                }  

               // boxs idss
                if (ba == '') {
                    ba = "p" + idnu
                } else {
                    ba = ba +"," + "p"+ idnu;
                }

                idnu = idnu + 1;
            }
            boxno.push(ba);
            tablecreate += tabledata;

            tablecreate += '</table></td>';

            tabledata = '';

            if (shape == "v") {
                tablecreate += "</tr>";
                
            }

           

            if (shape == "h") {
                
                trmadd = "";
                ra = 1;                
                if (j == type - 1) {
                    trmadd = "1";                   
                }
                if (trmadd == "1") {
                    tablecreate += '</tr>';
                    va = 1;
                }

            }


        }

        $("#multitable").append(tablecreate);

        idsstoretoarray(type, shape);

    } else {
        return false;
    }

}




function idsstoretoarray(boxs,shape) {

    let idstart = 10;
    
    
    for (i = 1; i <= boxs; i++) {
        endids = endids + 9;
    }
    endids = endids + idstart;
    for (j = 11; j < endids ; j++) {
        let id = $("#p" + j);
        let ra = id.attr("r").substring(1, 2);
        let raindex = rowno[ra-1];
        if (raindex == '') {
            raindex = id.attr("id");
        } else {
            raindex = raindex + ',' + id.attr("id");
        }
        rowno[ra - 1] = raindex;
        let va = id.attr("v").substring(1, 2);
        let vaindex = verno[va - 1];
        if (vaindex == '') {
            vaindex = id.attr("id");
        } else {
            vaindex = vaindex + ',' + id.attr("id");
        }
        verno[va - 1] = vaindex;


    }

    if (boxs == 1) {
        
        $("#multitable").attr("style", "width:198px;height:198px;");
        
    } else if (boxs == 2) {
        if (shape == "v") {
            $("#multitable").attr("style", "width:198px;height:396px;");
        } else {
            $("#multitable").attr("style", "width:396px;height:198px;");
        }     
    } else {

        if (shape == "v") {
            $("#multitable").attr("style", "width:198px;height:594px;");
        } else {
            $("#multitable").attr("style", "width:594px;height:198px;");
        }

        
    }

    //rowno = raa;
    //verno = vaa;

    
}

let cntid = 11;

function fndubletable( v , h ) {

    

    let maintable = '';

    for (kk = 0; kk < v; kk++) {

        maintable += '<tr>';

        let vid = 0;

        let rowid = 1 + (kk * 3);

        for (ll = 0; ll < h; ll++) {

            
            maintable += '<td>';
             
            maintable += innertables( rowid , vid);

            maintable += '</td>';

            vid = vid + 3;
        }


        maintable += '</tr>';
        
    }

    let wid = h * 192;
    let hit = v * 192;

    $("#multitable").append(maintable);

    let hw = "width:" + wid + "px;" + "height:" + hit + "px;";

    $("#multitable").attr("style", hw);

    idsstoreintoarray();

    $("#hdnendid").val(cntid);

    return false;
}


let bids = 1;


function innertables( rowid , vid) { 

    let rids = rowid;

    let innertable = '<table style="height:192px;width:192px" border="0">';

    let boxids = '';

    for (k = 1; k < 4; k++) {

        innertable += '<tr>';

        for (j = 1; j < 4; j++) {

            let vrid = vid + j;
             
            innertable += '<td>';

            innertable += '<button   v="v' + vrid + '"   r="r' + rids + '"   b="b' + bids + '"  id="m' + cntid + '"  class="spdata" style="width:60px;height:60px" onclick="return fnspandata(this.id)" ></button>';

            innertable += '</td>';

            if (boxids == "") {
                boxids = "m" + cntid;
            } else {
                boxids = boxids + ",m" + cntid;
            }            

            cntid = cntid + 1;
        }

        rids = rids + 1;

        innertable += '</tr>';
    }

    innertable += '</table>';

    boxno.push(boxids);

    bids = bids + 1;

    return innertable;
}

function idsstoreintoarray() {

    for (j = 11; j < cntid ; j++) {
        let id = $("#m" + j);
        let ra = id.attr("r").substring(1, 2);
        let raindex = rowno[ra - 1];
        if (raindex == '') {
            raindex = id.attr("id");
        } else {
            raindex = raindex + ',' + id.attr("id");
        }
        rowno[ra - 1] = raindex;
        let va = id.attr("v").substring(1, 2);
        let vaindex = verno[va - 1];
        if (vaindex == '') {
            vaindex = id.attr("id");
        } else {
            vaindex = vaindex + ',' + id.attr("id");
        }
        verno[va - 1] = vaindex;


    }
    
}
