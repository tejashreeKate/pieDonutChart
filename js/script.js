$(function () {
    var old,x=0,y=0,z=0;
    var actualData = [30,40,30];
    var benchmarkData = [30,40,30];
    var drillDownData1=[22,48,30];
    var drillDownData2=[40,28,32];
    var drillDownData3=[32,38,30];
    var actualOuterColors = ['#5ab1fe','#3977fe','#0c9cfd'];
    var actualInnerColors = ['#b2d0e8','#a2bfe7','#88bfe8'];
    var benchmarkOuterColors =['#d5dfe8','#c5d0dc','#c8d4e2'];
    var benchmarkInnerColors = ['#e4ecf4','#dfe8f1','#e1eaf3'];
    var seriesOptions = [],innerSeries = [];
    var benchmarkOptions =[], benchamrkInner = [];
    var drilldownOptions1=[],drilldownInner1=[];
     var drilldownOptions2=[],drilldownInner2=[];
     var drilldownOptions3=[],drilldownInner3=[];
    var benchVal=false;
    var actualVal=1;

    for(var i=0;i<actualData.length;i++){
       seriesOptions.push({
            y:actualData[i],
            color:actualOuterColors[i]
        })
       innerSeries.push({
            y:actualData[i],
            color:actualInnerColors[i]
        })
       benchmarkOptions.push({
            y:benchmarkData[i],
            color:benchmarkOuterColors[i]
        })
       benchamrkInner.push({
            y:benchmarkData[i],
            color:benchmarkInnerColors[i]
        })
        drilldownOptions1.push({
            y:drillDownData1[i],
            color:actualOuterColors[i]
        })
        drilldownInner1.push({
            y:drillDownData1[i],
            color:actualInnerColors[i]
        })
         drilldownOptions2.push({
            y:drillDownData2[i],
            color:actualOuterColors[i]
        })
          drilldownInner2.push({
            y:drillDownData2[i],
            color:actualInnerColors[i]
        })
          drilldownOptions3.push({
            y:drillDownData3[i],
            color:actualOuterColors[i]
        })
           drilldownInner3.push({
            y:drillDownData3[i],
            color:actualInnerColors[i]
        })
    }
    function draw(){  
    old = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            animation:true,
            type: 'pie',
            borderWidth:'4px',
            borderColor:'red'
          
        },
       plotOptions: {
                pie: {
                    shadow: false,
                    borderWidth:null,
                    dataLabels:{
                        enabled: false,
                        allowPointSelect: true,
                        connectorColor: 'red',
                        connectorWidth:1
                    }
                },
          /* series:{
               point:{
                   events:{
                       click:function(){
                           if(val ==0){
                             perform();
                           }
                           else{
                               back();
                           }
                       }
                   }
               }
           }*/
       },

        series: [{
            id:'first',
              point:{
                   events:{
                       click:function(){
                         back();
                           
                       }
                   }
               },
            center: ['30%', '50%'],
            size: '63%',
            data: [
                {y: 30, color: '#c9c9c9'},
                {y: 40, color: '#c9c9c9' },
                {y: 30, color: '#c9c9c9'}
              
            ],
            startAngle:-30,
            states:{
                hover:{
                    enabled:false
                }
            },
            zIndex:500
        },
            {
                  point:{
                   events:{
                       click:function(){
                         back();
                           
                       }
                   }
               },
            center: ['30%', '50%'],
            size: '60%',
            data: innerSeries,
            startAngle:-30,
            states:{
                hover:{
                    enabled:false
                }
            },
            shadow:{
                enabled:'true',
                width:'5px'
            },
            zIndex:800
            
        },{
            id:'blue',
              point:{
                   events:{
                       click:function(){
                         back();
                           
                       }
                   }
               },
            center: ['30%', '50%'],
            size: '60%',
            innerSize: '30%',
            data: seriesOptions,
            startAngle:-30,
            zIndex:'1000',
            dataLabels:{
                enabled:true,
                color:'white',
                distance:-30
            }
            
        },
                 {
                        point:{
                   events:{
                       click:function(){
                         perform();
                           
                       }
                   }
               },
            center: ['60%', '50%'],
            size: '43%',
            data: [
                {y: 30, color: '#e1e8ed'},
                {y: 40, color: '#e1e8ed' },
                {y: 30, color: '#e1e8ed'}
              
            ],
            startAngle:-30,
            states:{
                hover:{
                    enabled:false
                }
            },
            zIndex:x
           
        },
        {
            id:'inner',
            point:{
                   events:{
                       click:function(){
                         perform();
                           
                       }
                   }
               },
            center: ['60%', '50%'],
            size: '40%',
            data:benchamrkInner,
            startAngle:-30,
            states:{
                hover:{
                    enabled:false
                }
            },
            zIndex:y
        },
         {
              point:{
                   events:{
                       click:function(){
                         perform();
                           
                       }
                   }
               },
            center: ['60%', '50%'],
            size: '40%',
            innerSize:'20%',
            data: benchmarkOptions,
            startAngle:-30,
            states:{
                hover:{
                    enabled:false
                }
            },
             zIndex:z
        }]       
    }) 
    }
    draw();

function perform(){
    if(!benchVal){
        benchVal=true;
        actualVal=0;
    old.destroy();
    seriesOptions = [],innerSeries = [];
    benchmarkOptions =[], benchamrkInner = [];
    x=1200;y=1300;z=1400;
      for(var i=0;i<actualData.length;i++){
       seriesOptions.push({
            y:actualData[i],
            color:benchmarkOuterColors[i]
        })
       innerSeries.push({
            y:actualData[i],
            color:benchmarkInnerColors[i]
        })
       benchmarkOptions.push({
            y:benchmarkData[i],
            color:actualOuterColors[i]
        })
       benchamrkInner.push({
            y:benchmarkData[i],
            color:actualInnerColors[i]
        })
    }
    draw();
    }
    }
    function back(){
        benchVal=false;
        val=0;
       old.destroy;
      x=10,y=20,z=30;
        seriesOptions = [],innerSeries = [];
    benchmarkOptions =[], benchamrkInner = [];
      for(var i=0;i<actualData.length;i++){
       seriesOptions.push({
            y:actualData[i],
            color:actualOuterColors[i]
        })
       innerSeries.push({
            y:actualData[i],
            color:actualInnerColors[i]
        })
       benchmarkOptions.push({
            y:benchmarkData[i],
            color:benchmarkOuterColors[i]
        })
       benchamrkInner.push({
            y:benchmarkData[i],
            color:benchmarkInnerColors[i]
        })
    }
        draw();
    }
   });