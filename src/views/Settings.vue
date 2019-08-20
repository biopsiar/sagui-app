<template>
  <div class="settings flex flex-col h-full py-4 text-left">

    <!-- AVALIAÇÃO -->
    <label class="block text-gray-500 text-sm font-bold mx-2 my-1 uppercase">Avaliação</label>
    <div class="bg-white shadow rounded p-4 mb-4">
      <!-- localização -->
      <div class="mb-4">
        <div class="flex items-center">
          <div class="flex flex-col w-full">
            <label class="block text-gray-700 text-sm font-bold" for="username">Localização</label>
            <p class="block text-gray-500 text-sm">Avaliar gastos de uma localização específica</p>
          </div>
          <i class="fas fa-chevron-right text-md text-gray-500"></i>
        </div>
      </div>

      <!-- categoria -->
      <div class="mb-0">
        <div class="flex items-center">
          <div class="flex flex-col w-full">
            <label class="block text-gray-700 text-sm font-bold" for="username">Categorias</label>
            <p class="block text-gray-500 text-sm">Avaliar gastos de uma categoria específica</p>
          </div>
          <i class="fas fa-chevron-right text-md text-gray-500"></i>
        </div>
      </div>
      
    </div>

    <!-- CONTA -->
    <label class="block text-gray-500 text-sm font-bold mx-2 my-1 uppercase">Conta</label>
    <div class="bg-white shadow rounded p-4 mb-4">
      <!-- localização -->
      <div class="mb-4">
        <div class="flex items-center">
          <div class="flex flex-col w-full">
            <label class="block text-gray-700 text-sm font-bold" for="username">E-mail</label>
            <p class="block text-gray-500 text-sm">imparatodanilo@gmail.com</p>
          </div>
          <i class="fas fa-chevron-right text-md text-gray-500"></i>
        </div>
      </div>

      <!-- categoria -->
      <div class="mb-0">
        <div class="flex items-center">
          <div class="flex flex-col w-full">
            <label class="block text-gray-700 text-sm font-bold" for="username">Alterar senha</label>
          </div>
          <i class="fas fa-chevron-right text-md text-gray-500"></i>
        </div>
      </div>
      
    </div>

    <!-- AJUDA -->
    <label class="block text-gray-500 text-sm font-bold mx-2 my-1 uppercase">Ajuda</label>
    <div class="bg-white shadow rounded p-4 mb-6">
      <!-- categoria -->
      <div class="mb-4">
        <div class="flex items-center">
          <div class="flex flex-col w-full">
            <label class="block text-gray-700 text-sm font-bold" for="username">Perguntas frequentes</label>
          </div>
          <i class="fas fa-chevron-right text-md text-gray-500"></i>
        </div>
      </div>
      <!-- categoria -->
      <div class="mb-0">
        <div class="flex items-center">
          <div class="flex flex-col w-full">
            <label class="block text-gray-700 text-sm font-bold" for="username">Sobre o app</label>
          </div>
          <i class="fas fa-chevron-right text-md text-gray-500"></i>
        </div>
      </div>
      
    </div>

    <!-- AJUDA -->
    <div class="bg-white shadow rounded p-4 mb-4">
      <!-- categoria -->
      <div class="mb-0">
        <div class="flex items-center">
          <div class="flex flex-col w-full">
            <router-link to="/" class="block text-red-700 text-sm font-bold" for="logout">Sair</router-link>
          </div>
          <i class="fas fa-sign-out-alt text-md text-gray-500"></i>
        </div>
      </div>
      
    </div>
  </div>
</template>
