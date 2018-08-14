<template>
    <nav class="navbar navbar-default"  style="margin-bottom:0;padding-bottom:3px;">
    <div class="container-fluid">
        <div class="navbar-header">
        <img class=" nav navbar-brand"  src="./checkers-icon.svg">
        <h1 class="navbar-brand" style="color:#FFF;font-size:32px">Checkers</h1>
        </div> 

        <div class="nav navbar navbar-right"  style="margin-bottom:0;margin-top:10px;">
        <ul class="nav navbar-nav" >
            <router-link to="/game" tag="li" active-class="active"  ><a class="nav-link" style="color:d3d3d3">PLAY</a></router-link>
            <!-- <li class="nav-item-active"><a class="nav-link" href="#">PLAY</a></li> -->
            <router-link to="/profile" tag="li" active-class="active" ><a class="nav-link" style="color:d3d3d3">PROFILE</a></router-link>
            <!-- <li class="nav-item" style="padding-left:20px;"><a class="nav-link" style="color:#d3d3d3" href="#">PROFILE</a></li> -->
        </ul>
        </div>
    </div>
    </nav>
</template>

<style scoped>
nav {
    font-family: 'Audiowide', cursive;
    font-weight: bold;
    background-color: dimgray;
    color: #FFF;
}

h1 {
    padding-left: 20px;
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 24px;
    
}

img {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    margin-top: 15px;
}

.navbar-default .navbar-nav>li>a {
    color: #d3d3d3;
}

.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover

.active .nav-link {
    color: #FFF;
    background-color: #777;
}




</style>