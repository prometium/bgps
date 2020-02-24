package com.lab.system.model;

public class StudyGroup {

    private int id;
    private String name;

    public StudyGroup() {
    }

    public StudyGroup(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
