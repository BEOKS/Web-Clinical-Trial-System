package com.example.clinicaltrialsystem.Storage;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;

@Service
@RequiredArgsConstructor
public class StorageService {
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
}
