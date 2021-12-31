// *** ADDING IMAGES ***

function newImage(imgSource, leftPixel, bottomPixel) {
    var newElement = document.createElement('img');
    newElement.src = imgSource;
    newElement.style.position = 'fixed';
    newElement.style.left = leftPixel;
    newElement.style.bottom = bottomPixel;
    document.body.append(newElement);
    return newElement
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/well.png', '500px', '425px')

// let newImage = function(newElement,imgSource,leftPixel,bottomPixel) {
//     var newElement = document.createElement('img');
//     newElement.src = imgSource;
//     newElement.style.position = 'fixed';
//     newElement.style.left = leftPixel;
//     newElement.style.bottom = bottomPixel;
//     document.body.append(newElement);
// }

// I think the above function didnt work because you had a parameter 
// called newElement in the function parameters and then set a new var called newElement as well

// newImage(greenCharacter,'assets/green-character.gif','100px','100px')


// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)



// *** ADDING ITEMS ***

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })

function newItem(imgSource, leftPixel, bottomPixel) {
    var newElement = document.createElement('img');
    newElement.src = imgSource;
    newElement.style.position = 'fixed';
    newElement.style.left = leftPixel;
    newElement.style.bottom = bottomPixel;
    document.body.append(newElement);
    
    newElement.addEventListener('dblclick', function(){
        newElement.remove()
    })

}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')



// *** ADDING BACKGROUND IMAGES ***

// let sky = document.createElement('img')
// sky.src = 'assets/sky.png'
// sky.style.position = 'fixed'
// sky.style.left = '500px'
// sky.style.bottom = '405px'
// sky.style.zIndex = '-1'
// document.body.append(sky)

function skyImage(leftPixel, topPixel) {
    let sky = document.createElement('img');
    sky.src = 'assets/sky.png';
    sky.style.position = 'fixed';
    sky.style.zIndex = '-1'
    sky.style.left = leftPixel;
    sky.style.top = topPixel;
    document.body.append(sky);
    return sky;
}

// skyImage('0px', '0px')

for (let i = 0; i <= 2000; i = i + 100) {
    skyImage(i + 'px', '0px')
}