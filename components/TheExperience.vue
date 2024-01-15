<template>
  <section class="work">
    <h2 class="title-2 work__title">{{ $t('experience.title') }}</h2>

    <div class="work__container">
      <UIWorkExperience>
        <template v-slot:title>
          {{ $t('experience.work_list.lebedev.title') }}
        </template>
        <template v-slot:position>
          {{ $t('experience.work_list.lebedev.position') }}
        </template>
        <template v-slot:time>
          {{ $t('experience.work_list.lebedev.time') }}
        </template>
        <ul>
          <li
            v-for="(task, idx) in $tm('experience.work_list.lebedev.tasks')"
            :key="idx"
            v-html="$rt(task)"
          />
        </ul>
      </UIWorkExperience>
      <UIWorkExperience>
        <template v-slot:title>{{ $t('experience.work_list.freelance.title') }}</template>
        <template v-slot:position>{{ $t('experience.work_list.freelance.position') }}</template>
        <template v-slot:time>{{ $t('experience.work_list.freelance.time') }}</template>
        <ul>
          <li
            v-for="(task, idx) in $tm('experience.work_list.freelance.tasks')"
            :key="idx"
            v-html="$rt(task)"
          />
        </ul>
        <template v-slot:projects_title>
          <h5 class="title-5">{{ $t('experience.work_list.freelance.projects_title') }}</h5>
        </template>
        <template v-slot:projects>
          <UIProjectContainer :url="$t('experience.work_list.freelance.vinilavanila.link_url')">
            <template v-slot:title>{{
              $t('experience.work_list.freelance.vinilavanila.title')
            }}</template>
            <template v-slot:link>
              {{ $t('experience.work_list.freelance.vinilavanila.link_text') }}
            </template>
            <template v-slot:subtitle>
              {{ $t('experience.work_list.freelance.vinilavanila.subtitle') }}
            </template>
          </UIProjectContainer>
          <UIProjectContainer :url="$t('experience.work_list.freelance.samprachka.link_url')">
            <template v-slot:title>{{
              $t('experience.work_list.freelance.samprachka.title')
            }}</template>
            <template v-slot:link>
              {{ $t('experience.work_list.freelance.samprachka.link_text') }}
            </template>
            <template v-slot:subtitle>
              {{ $t('experience.work_list.freelance.samprachka.subtitle') }}
            </template>
          </UIProjectContainer>
          <UIProjectContainer :url="$t('experience.work_list.freelance.24mkk.link_url')">
            <template v-slot:title>{{ $t('experience.work_list.freelance.24mkk.title') }}</template>
            <template v-slot:link>
              {{ $t('experience.work_list.freelance.24mkk.link_text') }}
            </template>
            <template v-slot:subtitle>
              {{ $t('experience.work_list.freelance.24mkk.subtitle') }}
            </template>
          </UIProjectContainer>
        </template>
      </UIWorkExperience>
    </div>
  </section>
</template>

<script setup></script>

<style lang="sass">
.work
    padding-top: 30px
</style>
