package com.example.clinicaltrialsystem.Storage;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageFileStorageService {
    private final ServletContext servletContext;
    public static final String STORAGE_DIR_NAME="/Storage/";

    public void saveFile(MultipartFile multipartFile) throws IOException {
        String path=System.getProperty("user.home")+STORAGE_DIR_NAME;
        if(!new File(path).exists()){
            new File(path).mkdir();
        }
        multipartFile.transferTo(new File(path+multipartFile.getOriginalFilename()));
    }

    public File getFile(String fileName) {
        String path=System.getProperty("user.home")+STORAGE_DIR_NAME+fileName;
        return new File(path);
    }

    public File[] getAllFiles(){
        String dirPath=System.getProperty("user.home")+STORAGE_DIR_NAME;
        File dir=new File(dirPath);
        return dir.listFiles();
    }

    public boolean deleteFile(String filename){
        String path=System.getProperty("user.home")+STORAGE_DIR_NAME+filename;
        return new File(path).delete();
    }

    public boolean deleteAll(){
        String path=System.getProperty("user.home")+STORAGE_DIR_NAME;
        for(File file : getAllFiles()){
            file.delete();
        }
        return new File(path).delete();
    }
}
