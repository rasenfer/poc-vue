<template>
  <div>
    <Header class="header" toggle="menu-view" :logo="logo" />
    <div class="container-fluid">
      <div class="row content">
        <Menu class="menu col-sm-2" id="menu-view" :links="links" />
        <div class="content">
          <slot class="content" />
        </div>
      </div>
      <div class="row col-12 footer">foot</div>
    </div>
  </div>
</template>

<script src="./js/MainView.js" />

<style lang="scss" src="./css/MainView.scss" />
