<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="/">Home</b-navbar-brand>

          <b-navbar-toggle target="nav_collapse" />

          <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Price">
                          <b-dropdown-item href="#">DKK</b-dropdown-item>
                          <b-dropdown-item href="#">USD</b-dropdown-item>
                          <b-dropdown-item href="#">EUR</b-dropdown-item>
                          <b-dropdown-item href="#">NOK</b-dropdown-item>
                          <b-dropdown-item href="#">SEK</b-dropdown-item>
                    </b-nav-item-dropdown>

                      <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                      </b-nav-form>

                      <b-nav-item right>
                            <b-button >Cart</b-button>
                      </b-nav-item>
                </b-navbar-nav>
          </b-collapse>
      </b-navbar>
</template>

<script>
    export default {
      name: 'TheHeader'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
