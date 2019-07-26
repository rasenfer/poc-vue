<template>
  <div>
    <div class="container-fluid">
      <Header class="header row" toggle="menu-view" :logo="logo" />
      <div class="row body">
        <div id="menu-view" class="menu col-sm-2 collapse navbar-collapse">
          <Menu :links="links" />
        </div>
        <div class="page">
          <div class="content withFooter">
            <slot />
          </div>
          <div class="footer">v{{version}}{{env !== 'production' ? ' - env: ' + env : ''}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./main-view-script.js" />

<style lang="scss" src="./main-view-style.scss" />
