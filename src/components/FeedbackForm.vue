<script>
export default {
    data() {
        return {
            username: '',
            feedback: ''
        }
    }
}
</script>

<template>
    
    <section class="feedback-section">
        <div class="container">

            <div class="feedback-section__info">
                <h2 class="title">
                    HELP MAKE IT <span>better</span>
                </h2>
                <p class="text">
                    Write about any problems you face when using a certain clock style or give some new ideas.
                </p>
            </div>

            <form action="../../index.html" method="POST" netlify class="feedback-section__form">
                <label for="username">Username</label>
                <input v-model="username" type="text" id="username" placeholder="e.g. instagram @user123">
                <label for="feedback">Feedback</label>
                <textarea v-model="feedback" id="feedback" placeholder="your text here..." rows="5"></textarea>
                <button type="submit" class="btn" :disabled="!(username && feedback)">Send</button>
            </form>

        </div>
    </section>

</template>

<style lang="scss" scoped>
@import '../main.scss';

.feedback-section {
    padding-top: 30px;

    .container {
        max-width: 1040px;
        padding: 0;
        padding-left: 40px;
        display: flex;
        justify-content: space-between;
    }

    &__info {
        max-width: 455px;

        .text {
            padding-top: 30px;
            max-width: 425px;
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background: $clr-bg-dk-blue;
        border-radius: 10px;
        border: 2px solid $clr-st-dk-blue;
        padding: 40px;
        margin-right: 50px;

        label {
            text-transform: uppercase;
            font-size: $fs-sm;
            color: $clr-lt-blue;
        }

        input {
            margin-bottom: 10px;
        }

        input, textarea {
            width: 310px;
            padding: 10px 15px;
            outline: none;
            border-radius: 5px;
            border: 2px solid $clr-lt-blue;
            background: transparent;
            color: $clr-white;
            letter-spacing: 0.7px;
            
            &::placeholder {
                color: $clr-grey;
                font-weight: 700;
            }
        }

        .btn {
            background: $clr-lt-blue;
            border: none;
            border-radius: 5px;
            padding: 5px;
            font-weight: 700;
            cursor: pointer;

            &:disabled {
                opacity: 0.7;
                cursor: default;
            }
        }
    }
}

</style>
