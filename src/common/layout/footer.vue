<template>
    <div class="noahv-layout-footer">
        <!-- warning:
            if you run useHeader() this components Will not be useed,
            you can diy footer in header commponet
        -->
        <div class="copyright">
            ©2019 - present airdb.
        </div>
    </div>
</template>

<script>
export default {
    name: 'NvFooter'
};
</script>

<style>
    .copyright {
        line-height: 50px;
        text-align: center;
    }
</style>
