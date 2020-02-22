package com.lab.system.dao;

import com.lab.system.model.Student;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class StudentJdbc {

    private final JdbcTemplate jdbcTemplate;
    private final SimpleJdbcInsert simpleJdbcInsert;

    public StudentJdbc(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.simpleJdbcInsert = new SimpleJdbcInsert(dataSource).withTableName("Student");
    }

    public int create(Student student) {
        Map<String, Object> parameters = new HashMap<String, Object>();

        parameters.put("id", student.getId());
        parameters.put("surname", student.getSurname());
        parameters.put("name", student.getName());
        parameters.put("second_name", student.getSecond_name());
        parameters.put("study_group_id", student.getStudy_group_id());

        return simpleJdbcInsert.execute(parameters);
    }

    public List<Student> getAll() {
        return jdbcTemplate.query(
                "SELECT * FROM student",
                this::mapStudent
        );
    }

    public Student get(int id) {
        return jdbcTemplate.queryForObject(
                "SELECT * FROM student WHERE id = ?",
                this::mapStudent, id
        );
    }

    private Student mapStudent(ResultSet rs, int i) throws SQLException {
        return new Student(
                rs.getInt("id"),
                rs.getString("surname"),
                rs.getString("name"),
                rs.getString("second_name"),
                rs.getInt("study_group_id")
        );
    }
}
