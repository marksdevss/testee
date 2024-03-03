<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="previas" >
    <h2>Prévias</h2>
    <div class="previews-container">
      <div v-for="(item, index) in items" :key="index" class="preview-item">
        <img :src="item.image" :alt="item.title" class="preview-image">
        <div class="preview-title">{{ item.title }}</div>
        <div class="preview-description">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagePreviews',
  data() {
    return {
      items: [
        { 
          title: 'Item 1', 
          description: 'Moletom de cobra VLONE Viper Moletom masculino moletom com capuz masculino', 
          image: 'https://dcdn.mitiendanube.com/stores/002/447/211/products/s94d64560bcf34929bfc59b16d4c111c2o-e1ab4996494e1a2bea16643040254976-1024-1024.jpg' 
        },
        { 
          title: 'Item 2', 
          description: 'Moletom de cobra VLONE Viper Moletom masculino moletom com capuz masculino', 
          image: 'https://dcdn.mitiendanube.com/stores/002/447/211/products/s20fed13887d64ea19293dd577d83fc3bp-dd5850fdbfc3c182c516643040333186-1024-1024.jpg' 
        }
           ]
    };
  }
}
</script>

<style>
.image-previews .previews-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.preview-item {
  width: 150px;
  margin-top: 12px;
}

.preview-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.preview-title {
  font-weight: bold;
  margin-top: 5px;
}

.preview-description {
  font-size: 0.9em;
}
</style>