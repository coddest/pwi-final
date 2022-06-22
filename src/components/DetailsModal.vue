<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <!-- <p>database id: {{player.id}}</p> -->
            <p>Name: {{player.first_name}} {{player.last_name}}</p>
            <p>Team: {{player.team.full_name}} ({{player.team.abbreviation}})</p>

            <p v-if="player.position === 'C' ">position: Center</p>
            <p v-if="player.position === 'G' ">position: Guard</p>
            <p v-if="player.position === 'F' ">position: Forward</p>
            <p v-if="player.position === ''">position: N/A</p>

            <p v-if="player.height_feet !== null">height: {{player.height_feet}}.{{player.height_inches}} ft</p>
            <p v-if="player.height_feet === null">height: N/A</p>

            <p v-if="player.weight_pounds !== null">weight: {{player.weight_pounds}} lbs</p>
            <p v-if="player.weight_pounds === null">weight: N/A</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['player'],
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    }
}
</script>

<style>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: lightblue;
        border-radius: 10px;
        font-size: 25px;
        border-style: solid;
        border-width: 1px;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 600px){
        .modal{
            width: 70%;
            padding: 20px;
            margin: 100px auto;
            background: lightblue;
            border-radius: 10px;
            font-size: 25px;
            border-style: solid;
            border-width: 1px;
        }
    }
</style>